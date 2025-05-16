import { useState } from "react"
import { router } from "@inertiajs/react"

function Create() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        linkGithub: "",
        linkDemo: "",
        picture: null
    })
    function handleChange(e) {
        const { name, value, files, type } = e.target
        if (type === "file") {
            if (files && files[0]){
                setFormData({
                    ...formData,
                    [name]: files[0],
                })
            }
        }else {
            setFormData({
                ...formData,
                [name]: value,
            })
        }
        
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        router.post('/project', formData)
        setFormData({
            title: "",
            description: "",
            linkGithub: "",
            linkDemo: "",
            picture: null
        })
        router.get('/dashboard')
    }
  return (
    <div className="max-w-lg mx-auto p-6 bg-black rounded shadow text-white">
        <h2 className="text-xl font-semibold mb-4 text-white">Ajouter un project</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium mb-1 text-white">
                Nom de l'experience
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    maxLength={20}
                    className="w-full px-3 py-2 border-gray rounded text-black bg-white"
                    required
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1 text-white">
                Description
                </label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    maxLength={200}
                    rows={4}
                    className="w-full px-3 py-2 border rounded text-black bg-white"
                />
                <p className="text-xs text-gray-500 mt-1">{formData.description.length}/200 caractères</p>
            </div>
            <div>
            <div>
                <label className="block text-sm font-medium mb-1 text-white">
                Lien github
                </label>
                <input
                    type="text"
                    id="linkGithub"
                    name="linkGithub"
                    value={formData.linkGithub}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border-gray rounded text-black bg-white"
                    required
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1 text-white">
                Lien du site
                </label>
                <input
                    type="text"
                    id="linkDemo"
                    name="linkDemo"
                    value={formData.linkDemo}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border-gray rounded text-black bg-white"
                    required
                />
            </div>
            <label htmlFor="photo" className="block text-sm font-medium mb-1 text-white">
                Photo
            </label>
                <input
                    type="file"
                    id="picture"
                    name="picture"
                    onChange={handleChange}
                    accept="image/*"
                    className="w-full px-3 py-2 border rounded text-black bg-white"
                />
            </div>
            <div className="pt-4">
                <button
                type="submit"
                className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded disabled:opacity-50"
                >
                    Ajout du projet
                </button>
            </div>
        </form>
    </div>
  )
}

export default Create