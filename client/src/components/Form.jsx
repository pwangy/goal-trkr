import { useState } from 'react'

const Form = ({ onAdd }) => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [errors, setErrors] = useState({})

	const validate = (name, value) => {
		const newErrors = {}
		if (name === 'title' && value.length >= 25) {
			newErrors.title = '25 characters or less'
		}
		if (name === 'description' && value.length >= 200) {
			newErrors.description = '200 characters or less'
		}
		return newErrors
	}

	const handleTitleChange = (e) => {
		const { value } = e.target
		setTitle(value)
		const validationErrors = validate('title', value)
		setErrors((prevErrors) => ({ ...prevErrors, title: validationErrors.title }))
	}
	
	const handleDescriptionChange = (e) => {
		const { value } = e.target
		setDescription(value)
		const validationErrors = validate('description', value)
		setErrors((prevErrors) => ({ ...prevErrors, description: validationErrors.description }))
    }

	const handleSubmit = (e) => {
		e.preventDefault()

		const goalData = {
			title: title,
			description: description
		}

		fetch('/goals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(goalData)
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to add goal')
                }
                return res.json()
            })
            .then((newGoal) => {
                onAdd(newGoal)
                setTitle('')
                setDescription('')
                setErrors({})
            })
            .catch((err) => {
                console.error(err.message)
                setErrors((prevErrors) => ({ ...prevErrors, submit: err.message }))
            })
    }

	return (
		<div className='new-goal-form'>
			<form onSubmit={handleSubmit}>
				<div>
					<input
						type='text'
						name='title'
						placeholder='Goal title'
						value={title}
						className='input-title'
						onChange={handleTitleChange}
						maxLength={25}
						required={true}
					/>
					{errors.title && <p className='error'>{errors.title}</p>}
				</div>
				<div>
					<input
						type='text'
						name='description'
						placeholder='Short description'
						value={description}
						className='input-desc'
						onChange={handleDescriptionChange}
						maxLength={200}
					/>
					{errors.description && <p className='error'>{errors.description}</p>}
				</div>
				{errors.submit && <p className='error'>{errors.submit}</p>}
				<button type='submit'>Add Goal</button>
			</form>
		</div>
	)
}

export default Form