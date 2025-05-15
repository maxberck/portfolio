import { useState } from 'react'
import { router } from '@inertiajs/react'
import { title } from 'process'
import { start } from 'repl'

function Create() {
    const [formData, setFormData] = useState({
        title: '',
        company: '',
        start_date: '',
        end_date: '',
        description: '',
    })
    function handleChange(e) {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    function handleSubmit(e) {
        e.preventDefault();
        router.post('/experience', formData)
        setFormData({
            title: '',
            company: '',
            start_date: '',
            end_date: '',
            description: '',
        })
        router.get('/dashboard')
    }
  return (
    <div className="max-w-lg mx-auto p-6 bg-black rounded shadow text-white">
        <h2 className="text-xl font-semibold mb-4 text-white">Créer un nouveau skill</h2>
        
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
                    maxLength={50}
                    className="w-full px-3 py-2 border-gray rounded text-black bg-white"
                    required
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1 text-white">
                Company
                </label>
                <textarea
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    maxLength={100}
                    rows={2}
                    className="w-full px-3 py-2 border rounded text-black bg-white"
                />
                <p className="text-xs text-gray-500 mt-1">{formData.company.length}/100 caractères</p>
            </div>
            <div>
                <label className="block text-sm font-medium mb-1 text-white">
                Date de début
                </label>
                <input
                    type='date'
                    id="start_date"
                    name="start_date"
                    value={formData.start_date}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded text-black bg-white"
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1 text-white">
                Date de fin
                </label>
                <input
                    type='date'
                    id="end_date"
                    name="end_date"
                    value={formData.end_date}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded text-black bg-white"
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
                    maxLength={500}
                    rows={4}
                    className="w-full px-3 py-2 border rounded text-black bg-white"
                />
                <p className="text-xs text-gray-500 mt-1">{formData.description.length}/500 caractères</p>
            </div>
            <div className="pt-4">
                <button
                type="submit"
                className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded disabled:opacity-50"
                >
                    Créer le Skill
                </button>
            </div>
        </form>
    </div>
  )
}

export default Create