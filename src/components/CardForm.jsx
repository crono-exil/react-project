import { useState } from 'react';

function CardForm({ addCard, id }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    imgURL: '',
    isVisited: false,
  });

  const handleInputChange = (e) => {
    const { type, name, value, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: inputValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const card = {
      id: id,
      name: formData.name,
      description: formData.description,
      imgURL: formData.imgURL,
      isVisited: formData.isVisited,
    };
    addCard(card);
    setFormData({
      name: '',
      description: '',
      imgURL: '',
      isVisited: false,
    });
  };
  return (
    <form
      className="flex flex-col gap-3 w-80 mb-10 bg-zinc-900 p-5 rounded-lg"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <label>Nome</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col">
        <label>Descrizione</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col">
        <label>Immagine</label>
        <input
          type="text"
          name="imgURL"
          value={formData.imgURL}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col">
        <label>Visitata?</label>
        <input
          type="checkbox"
          name="isVisited"
          checked={formData.isVisited}
          onChange={handleInputChange}
        />
      </div>

      <button type="submit" className="bg-zinc-950">
        Add Card
      </button>
    </form>
  );
}

export default CardForm;
