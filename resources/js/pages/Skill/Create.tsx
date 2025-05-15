import{ useState } from 'react'
import { router } from '@inertiajs/react'

function Create() {
    const [formData, setFormData] = useState({
        name: '',
        level: ''
    })

    function handleChange(e) {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        router.post('/skill', formData)
        setFormData({
            name: '',
            level: ''
        })

        router.get('/dashboard')
    }
  return (
    <div className="max-w-lg mx-auto p-6 bg-black rounded shadow text-white">
    <h2 className="text-xl font-semibold mb-4 text-white">Créer un nouveau skill</h2>
    
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1 text-white">
          Nom du skill
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
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-white">
          Level
        </label>
        <textarea
          id="level"
          name="level"
          value={formData.level}
          onChange={handleChange}
          maxLength={50}
          rows={4}
          className="w-full px-3 py-2 border rounded text-black bg-white"
        />
        <p className="text-xs text-gray-500 mt-1">{formData.level.length}/50 caractères</p>
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