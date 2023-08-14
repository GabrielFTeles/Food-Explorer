import { Container } from './styles';

import { Input } from '../../components/Input';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { FileInput } from '../../components/FileInput';
import { BackButton } from '../../components/BackButton';
import { NewIngredient } from '../../components/NewIngredient';
import { TextArea } from '../../components/TextArea';

export function New() {
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

        <div className="new-ingredients">
          <label htmlFor="ingredient">Ingredientes</label>
          <div>
            <NewIngredient 
              value="Tste"
            />
            <NewIngredient 
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