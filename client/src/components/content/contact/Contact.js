import style from './contact.module.css'

const Contact = () => {
    return(
        <div className={style.div}>
        <h1>Contact</h1>
        <form className='form-control'>
            <label htmlFor='name'>Name</label>
            <input className='form-control' type='text' name='name' /><br />
            <label htmlFor="email">E-Mail Address</label>
            <input className='form-control' type="email" name='email' /><br />
            <label htmlFor="message">Message</label>
            <textarea className='form-control' name="message" cols="30" rows="5" />
            <br />
            <button type='submit' className={style.buttonSubmit}>Send Message</button>
        </form>
    </div>
    )
}

export default Contact