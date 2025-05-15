import { useState, ChangeEvent, FormEvent } from 'react';
import { router } from '@inertiajs/react';

// Définition des interfaces pour le typage
interface FormData {
  name: string;
  surname: string;
  bio: string;
  photo: File | null;
  email: string;
}

interface Errors {
  [key: string]: string;
}

export default function CreateForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    surname: '',
    bio: '',
    photo: null,
    email: ''
  });
  
  const [processing, setProcessing] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({});

  // Gestion des changements dans les champs de texte
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Gestion du changement de fichier pour la photo
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        photo: e.target.files[0]
      });
    }
  };

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setProcessing(true);
    
    // Créer un FormData pour permettre l'envoi du fichier photo
    const formDataToSend = new FormData();
    
    // Ajout des champs texte
    formDataToSend.append('name', formData.name);
    formDataToSend.append('surname', formData.surname);
    formDataToSend.append('bio', formData.bio);
    formDataToSend.append('email', formData.email);
    
    // Ajout du fichier photo s'il existe
    if (formData.photo) {
      formDataToSend.append('photo', formData.photo);
    }
    
    // Pour le debug - décommenter si nécessaire
    // for (let pair of formDataToSend.entries()) {
    //   console.log(pair[0] + ': ' + pair[1]);
    // }
    
    router.post('/profil', formDataToSend, {
      forceFormData: true,
      onSuccess: () => {
        console.log('Succès : Profil créé');
        // Réinitialiser le formulaire après succès
        setFormData({
          name: '',
          surname: '',
          bio: '',
          photo: null,
          email: ''
        });
        
        // Rediriger vers le tableau de bord seulement après succès
        router.visit('/dashboard');
      },
      onError: (errors: Errors) => {
        console.error('Erreurs lors de la création du profil:', errors);
        setErrors(errors);
      },
      onFinish: () => {
        setProcessing(false);
      }
    });
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-black rounded shadow text-white">
      <h2 className="text-xl font-semibold mb-4 text-white">Créer un nouveau profil</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1 text-white">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            maxLength={20}
            className="w-full px-3 py-2 border-gray rounded text-black bg-white"
            required
          />
          {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
        </div>
        
        <div>
          <label htmlFor="surname" className="block text-sm font-medium mb-1 text-white">
            Prénom
          </label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            maxLength={20}
            className="w-full px-3 py-2 border rounded text-black bg-white"
            required
          />
          {errors.surname && <div className="text-red-500 text-sm mt-1">{errors.surname}</div>}
        </div>
        
        <div>
          <label htmlFor="bio" className="block text-sm font-medium mb-1 text-white">
            Biographie
          </label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            maxLength={500}
            rows={4}
            className="w-full px-3 py-2 border rounded text-black bg-white"
          />
          <p className="text-xs text-gray-500 mt-1">{formData.bio.length}/500 caractères</p>
          {errors.bio && <div className="text-red-500 text-sm mt-1">{errors.bio}</div>}
        </div>
        
        <div>
          <label htmlFor="photo" className="block text-sm font-medium mb-1 text-white">
            Photo
          </label>
          <input
            type="file"
            id="photo"
            name="photo"
            onChange={handleFileChange}
            accept="image/*"
            className="w-full px-3 py-2 border rounded text-black bg-white"
          />
          {errors.photo && <div className="text-red-500 text-sm mt-1">{errors.photo}</div>}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1 text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            maxLength={50}
            className="w-full px-3 py-2 border rounded text-black bg-white"
            required
          />
          {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
        </div>
        
        <div className="pt-4">
          <button
            type="submit"
            disabled={processing}
            className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded disabled:opacity-50"
          >
            {processing ? 'Envoi en cours...' : 'Créer le profil'}
          </button>
        </div>
      </form>
    </div>
  );
}