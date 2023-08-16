import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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

export function Edit() {
  const params = useParams();
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

  function handleCategory(option) {
    switch (option) {
      case 'Refeição':
        setCategory('meal');
        break;
      case 'Sobremesa':
        setCategory('dessert');
        break;
      case 'Bebida':
        setCategory('drink');
        break;
      default:
        break;
    }
  }

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

  function handleSaveDish() {
    if (newIngredient) return toast.info('Adicione o ingrediente antes de salvar as alterações.');

    if (!name || !category || ingredients.length === 0 || !price || !description) {
      return toast.error('Preencha todos os campos para salvar as edições.');
    }

    if (!price) return toast.error('O preço deve ser um número.');

    toast.promise(
      api.put('/dishes', { name, description, category, price, ingredients }),
      {
        pending: 'Salvando alterações...',
        success: {
          render({ data: { data } }) {
            if (image) {
              const imageFormData = handleImage();
              api.patch(`/dishes/${data.dish_id}`, imageFormData).then(() => navigate('/'));
            } else {
              navigate('/');
            }

            return `Alterações salvas com sucesso!`;
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

  useEffect(() => {
    async function getDishesData() {
      const dish_id = params.id;
      const { data } = await api.get(`/dishes/${dish_id}`);

      setImage({ name: data.image });
      setName(data.name);
      setCategory(data.category);
      setIngredients(data.ingredients);
      setPrice(data.price);
      setDescription(data.description);
    }

    getDishesData();
  }, []);

  return (
    <Container>
      <Header />

      <main>
        <BackButton />

        <h1>Editar prato</h1>

        <FileInput 
          id="image"
          label="Imagem do prato"
          placeholder={image ? image.name : "Selecione uma imagem para alterar"}
          onChange={(event) => setImage(event.target.files[0])}
        />

        <Input 
          id="name"
          label="Nome"
          value={name}
          placeholder="Ex.: Salada Ceasar"
          onChange={(event) => setName(event.target.value)}
        />

        <Select
          id="category"
          label="Categoria"
          options={["Refeição", "Sobremesa", "Bebida"]}
          onSelect={handleCategory}
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
          value={price}
          placeholder="R$ 40,00"
          onChange={(event) => setPrice(Number(event.target.value))}
        />

        <TextArea 
          id="description"
          label="Descrição"
          value={description}
          placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          onChange={(event) => setDescription(event.target.value)}
        />

        <div className="buttons-wrapper">
          <Button 
            title="Excluir"
            onClick={handleSaveDish}
          />
          <Button 
            title="Salvar alterações"
            disabled={(!name || !category || ingredients.length === 0 || !price || !description)}
            onClick={handleSaveDish}
          />
        </div>
      </main>

      <Footer />
    </Container>
  );
}