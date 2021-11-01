import { useState } from 'react'
import style from './contact.module.css'

const regexExpression = /^\S+@\S+\.\S+$/

const Contact = () => {
    const [errors, setErrors] = useState([])
    const [values, setValues] = useState(['', '', ''])
    const [validEmail, setValidEmail] = useState(false)
    const cursorOut = (e) => {
        let newErrors = errors
        const message = `${e.target.name} field is required.`
        if(!e.target.value) {
            const checkErrors = errors.filter(error => error === message)
            if(checkErrors.length === 0) {
                newErrors = [...errors, message]
                setErrors(newErrors)
            }
        }
    }
    const valueChanged = (e, index) => {
        values[index] = e.target.value
        setValues(values)
        if(index === 1) {
            if(!regexExpression.test(e.target.value)) {
                setValidEmail(false)
            } else {
                setValidEmail(true)
            }
        }
        const newErrors = errors.filter(error => error !== `${e.target.name} field is required.`)
        setErrors(newErrors)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        let checkEmpty = null
        values.forEach(value => {
            if(!value) checkEmpty = true
        })
        if(validEmail === true && !checkEmpty) {
            setValues(['', '', ''])
            alert('Message sent')
        } else {
            alert('E-mail must be valid and all inputs must be filled.')
        }
    }
    return(
        <div className={style.div}>
        <h1>Contact</h1>
        {errors.map(error => {
            return <h5 key={error}>{error}</h5>
        })}
        <form className='form-control'>
            <label htmlFor='name'>Name</label>
            <input className='form-control' type='text' name='Name' onMouseLeave={e => cursorOut(e)} autoComplete='off' defaultValue={values[0]} onChange={e => valueChanged(e, 0)} /><br />
            <label htmlFor="email">E-Mail Address{!validEmail ? ' (Must be valid)' : ''}</label>
            <input className='form-control' type="email" name='E-Mail'  onMouseLeave={e => cursorOut(e)} autoComplete='off' defaultValue={values[1]} onChange={e => valueChanged(e, 1)} /><br />
            <label htmlFor="message">Message</label>
            <textarea className='form-control' name="Message" cols="30" rows="5" onMouseLeave={e => cursorOut(e)} autoComplete='off' defaultValue={values[2]} onChange={e => valueChanged(e, 2)} />
            <br />
            <button type='submit' onClick={e => handleSubmit(e)}className={style.buttonSubmit}>Send Message</button>
        </form>
    </div>
    )
}

export default Contact