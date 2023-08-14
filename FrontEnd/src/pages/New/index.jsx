import { useState } from 'react';

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
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [newIngredient, setNewIngredient] = useState('');

  return (
    <Container>
      <Header />

      <main>
        <BackButton />

        <h1>Novo prato</h1>

        <FileInput 
          id="image"
          label="Imagem do prato"
          placeholder="Selecione uma imagem"
        />

        <Input 
          id="name"
          label="Nome"
          placeholder="Ex.: Salada Ceasar"
        />

        <Select
          id="category"
          label="Categoria"
          options={["Refeição", "Sobremesa", "Bebida"]}
          onSelect={(test) => console.log(test)}
        />

        <div className="new-ingredients">
          <label htmlFor="ingredient">Ingredientes</label>
          <div>
            <IngredientItem 
              value="Tste"
            />
            <IngredientItem 
              id="ingredient"
              isNew={true.toString()}
              placeholder="Adicionar"
            />
          </div>
        </div>

        <Input 
          id="price"
          label="Preço"
          placeholder="R$ 00,00"
        />

        <TextArea 
          id="description"
          label="Descrição"
          placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
        />

        <Button 
          title="Salvar alterações"
          disabled={true}
        />
      </main>

      <Footer />
    </Container>
  );
}