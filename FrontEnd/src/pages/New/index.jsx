import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { toast } from 'react-toastify';

import { Container } from './styles';

import { Input } from '../../components/Input';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { FileInput } from '../../components/FileInput';
import { BackButton } from '../../components/BackButton';
import { IngredientItem } from '../../components/IngredientItem';
import { TextArea } from '../../components/TextArea';
import { Select } from '../../components/Select';

export function New() {
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

  function handleNewIngredient() {
    if (!newIngredient) return;
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient('');
  }

  function handleRemoveIngredient(ingredient) {
    setIngredients(prevState => prevState.filter(item => item !== ingredient));
  }

  function handleImage() {
    const formData = new FormData();
    formData.append('image', image);
    return formData;
  }

  function handleNewDish() {
    if (newIngredient) return toast.info('Adicione o ingrediente antes de criar o prato.');

    if (!name || !category || ingredients.length === 0 || !price || !description) {
      return toast.error('Preencha todos os campos para criar um prato.');
    }

    if (!price) return toast.error('O preço deve ser um número.');

    toast.promise(
      api.post('/dishes', { name, description, category, price, ingredients }),
      {
        pending: 'Criando prato...',
        success: {
          render({ data: { data } }) {
            if (image) {
              const imageFormData = handleImage();
              api.patch(`/dishes/${data.dish_id}`, imageFormData).then(() => navigate('/'));
            } else {
              navigate('/');
            }

            return `Prato criado com sucesso!`;
          }
        },
        error: {
          render({ data }) {
            return `${data.message}`;
          }
        }
      }
    );
  }

  return (
    <Container>
      <Header />

      <main>
        <BackButton />

        <h1>Novo prato</h1>

        <FileInput 
          id="image"
          label="Imagem do prato"
          placeholder={image ? image.name : "Selecione uma imagem"}
          onChange={(event) => setImage(event.target.files[0])}
        />

        <Input 
          id="name"
          label="Nome"
          placeholder="Ex.: Salada Ceasar"
          onChange={(event) => setName(event.target.value)}
        />

        <Select
          id="category"
          label="Categoria"
          options={[
            {
              title: "Refeição",
              value: "meal"
            },
            {
              title: "Sobremesa",
              value: "dessert"
            },
            {
              title: "Bebida",
              value: "drink"
            }
          ]}
          onSelect={setCategory}
        />

        <div className="new-ingredients">
          <label htmlFor="ingredient">Ingredientes</label>
          <div>
            {
              ingredients.map((ingredient, index) => (
                <IngredientItem 
                  key={index}
                  value={ingredient}
                  onClick={() => handleRemoveIngredient(ingredient)}
                />
              ))
            }

            <IngredientItem 
              id="ingredient"
              isNew={true.toString()}
              placeholder="Adicionar"
              value={newIngredient}
              onChange={(event) => setNewIngredient(event.target.value)}
              onClick={handleNewIngredient}
            />
          </div>
        </div>

        <Input 
          id="price"
          label="Preço"
          type="number"
          placeholder="R$ 00,00"
          onChange={(event) => setPrice(Number(event.target.value))}
        />

        <TextArea 
          id="description"
          label="Descrição"
          placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          onChange={(event) => setDescription(event.target.value)}
        />

        <Button 
          title="Salvar alterações"
          disabled={(!name || !category || ingredients.length === 0 || !price || !description)}
          onClick={handleNewDish}
        />
      </main>

      <Footer />
    </Container>
  );
}