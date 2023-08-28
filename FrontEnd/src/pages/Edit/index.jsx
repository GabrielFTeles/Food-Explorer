import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDishes } from "../../hooks/dishes";

import { api } from "../../services/api";

import { toast } from "react-toastify";

import { Container } from "./styles";
import { Form } from "./styles";
import { Input } from "../../components/Input";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { FileInput } from "../../components/FileInput";
import { BackButton } from "../../components/BackButton";
import { IngredientInput } from "../../components/IngredientInput";
import { TextArea } from "../../components/TextArea";
import { Select } from "../../components/Select";

export function Edit() {
  const params = useParams();
  const navigate = useNavigate();
  const { getAllDishes } = useDishes();
  
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [startSelected, setStartSelected] = useState("");

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

  function saveDish() {
    const updateDishToast = toast.loading("Salvando alterações...");

    api
      .put(`/dishes/${params.id}`, {
        name,
        description,
        category,
        price,
        ingredients,
      })
      .then(({ data }) => {
        toast.update(updateDishToast, {
          render: "Alterações salvas com sucesso!",
          type: "success",
          isLoading: false,
          autoClose: 5000,
          closeOnClick: true,
          closeButton: true,
        });

        if (image) {
          const imageFormData = handleImage();
          api
            .patch(`/dishes/${data.id}`, imageFormData)
            .then(() => handleBackHome());
        } else {
          handleBackHome();
        }
      })
      .catch(({ data }) => {
        toast.update(updateDishToast, {
          render: () => `${data.message}`,
          type: "error",
          isLoading: false,
          autoClose: 5000,
          closeOnClick: true,
          closeButton: true,
        });
      });
  }

  function handleSaveDish(event) {
    event.preventDefault();

    if (newIngredient)
      return toast.info(
        "Adicione o ingrediente antes de salvar as alterações."
      );

    if (
      !name ||
      !category ||
      ingredients.length === 0 ||
      !price ||
      !description
    ) {
      return toast.error("Preencha todos os campos para salvar as edições.");
    }

    if (!price) return toast.error("O preço deve ser um número.");

    saveDish();
  }

  function handleDeleteDish() {
    toast.promise(api.delete(`/dishes/${params.id}`), {
      pending: "Excluindo prato...",
      success: {
        render() {
          handleBackHome();
          return "Prato excluído com sucesso!";
        },
      },
      error: {
        render({ data }) {
          return `${data.message}`;
        },
      },
    });
  }

  useEffect(() => {
    async function getDishesData() {
      const dish_id = params.id;
      const { data } = await api.get(`/dishes/${dish_id}`);

      setImageName(data.image);
      setName(data.name);
      setCategory(data.category);
      setStartSelected(data.category);
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

        <Form onSubmit={handleSaveDish}>
          <h1>Editar prato</h1>

          <div className="first-row">
            <FileInput
              id="image"
              label="Imagem do prato"
              mouseOverText={imageName}
              placeholder={imageName}
              onChange={(event) => {
                setImage(event.target.files[0]);
                setImageName(event.target.files[0].name);
              }}
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
              startSelected={startSelected}
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
              onSelect={(value) => setCategory(value)}
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

            <Input
              id="price"
              label="Preço"
              type="number"
              value={price}
              placeholder="R$ 40,00"
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>

          <div className="third-row">
            <TextArea
              id="description"
              label="Descrição"
              value={description}
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>

          <div className="buttons-wrapper">
            <Button title="Excluir prato" onClick={handleDeleteDish} type="button" />
            <Button
              title="Salvar alterações"
              disabled={
                !name ||
                !category ||
                ingredients.length === 0 ||
                !price ||
                !description
              }
              onClick={handleSaveDish}
            />
          </div>
        </Form>
      </main>

      <Footer />
    </Container>
  );
}
