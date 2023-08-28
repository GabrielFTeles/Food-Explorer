import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDishes } from "../../hooks/dishes";

import { api } from "../../services/api";

import { toast } from "react-toastify";

import { Container } from "./styles";
import { Form } from "./styles";
import { Input } from "../../components/Input";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Select } from "../../components/Select";
import { TextArea } from "../../components/TextArea";
import { FileInput } from "../../components/FileInput";
import { BackButton } from "../../components/BackButton";
import { CurrencyInput } from "../../components/CurrencyInput";
import { IngredientInput } from "../../components/IngredientInput";

export function New() {
  const navigate = useNavigate();
  const { getAllDishes } = useDishes();

  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  function handleNewIngredient() {
    if (!newIngredient) return;
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(ingredient) {
    setIngredients((prevState) =>
      prevState.filter((item) => item !== ingredient)
    );
  }

  function handleImage() {
    const formData = new FormData();
    formData.append("image", image);
    return formData;
  }

  async function handleBackHome() {
    await getAllDishes();
    navigate("/");
  }

  function createNewDish() {
    const createDishToast = toast.loading("Criando prato...");

    api
      .post("/dishes", { name, description, category, price, ingredients })
      .then(({ data }) => {
        toast.update(createDishToast, {
          render: "Prato criado com sucesso!",
          type: "success",
          isLoading: false,
          autoClose: 5000,
          closeOnClick: true,
          closeButton: true,
        });

        if (image) {
          const imageFormData = handleImage();
          api
            .patch(`/dishes/${data.dish_id}`, imageFormData)
            .then(() => handleBackHome());
        } else {
          handleBackHome();
        }
      })
      .catch(({ response: { data } }) => {
        toast.update(createDishToast, {
          render: () => `${data.message}`,
          type: "error",
          isLoading: false,
          autoClose: 5000,
          closeOnClick: true,
          closeButton: true,
        });
      });
  }

  function handleNewDish(event) {
    event.preventDefault();

    if (newIngredient)
      return toast.info("Adicione o ingrediente antes de criar o prato.");

    if (
      !name ||
      !category ||
      ingredients.length === 0 ||
      !price ||
      !description
    ) {
      return toast.error("Preencha todos os campos para criar um prato.");
    }

    if (!price) return toast.error("O preço deve ser um número.");

    createNewDish();
  }

  return (
    <Container>
      <Header />

      <main>
        <BackButton />

        <Form onSubmit={handleNewDish}>
          <h1>Novo prato</h1>

          <div className="first-row">
            <FileInput
              id="image"
              label="Imagem do prato"
              mouseOverText={image ? image.name : "Selecionar imagem"}
              placeholder={image ? image.name : "Selecione uma imagem"}
              onChange={(event) => setImage(event.target.files[0])}
            />

            <Input
              id="name"
              label="Nome"
              placeholder="Ex.: Salada Ceasar"
              onChange={(event) => setName(event.target.value.trim())}
            />

            <Select
              id="category"
              label="Categoria"
              options={[
                {
                  title: "Refeição",
                  value: "meal",
                },
                {
                  title: "Sobremesa",
                  value: "dessert",
                },
                {
                  title: "Bebida",
                  value: "drink",
                },
              ]}
              onSelect={setCategory}
            />
          </div>

          <div className="second-row">
            <div className="new-ingredients">
              <label htmlFor="ingredient">Ingredientes</label>
              <div>
                {ingredients.map((ingredient, index) => (
                  <IngredientInput
                    key={index}
                    value={ingredient}
                    onClick={() => handleRemoveIngredient(ingredient)}
                    style={{ width: `${ingredient.length / 1.15}rem` }}
                  />
                ))}

                <IngredientInput
                  id="ingredient"
                  isNew={true.toString()}
                  placeholder="Adicionar"
                  value={newIngredient}
                  onChange={(event) => setNewIngredient(event.target.value)}
                  onClick={handleNewIngredient}
                  style={{ width: `${newIngredient.length / 1.15}rem` }}
                />
              </div>
            </div>

            <CurrencyInput 
              label="Preço"
              placeholder="R$ 00,00"
              onValueChange={(values) => setPrice(values.floatValue)}
            />
          </div>

          <div className="third-row">
            <TextArea
              id="description"
              label="Descrição"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(event) => setDescription(event.target.value.trim())}
            />
          </div>

          <div className="buttons-wrapper">
            <Button
              title="Salvar alterações"
              disabled={
                !name ||
                !category ||
                ingredients.length === 0 ||
                !price ||
                !description
              }
              onClick={handleNewDish}
            />
          </div>
        </Form>
      </main>

      <Footer />
    </Container>
  );
}
