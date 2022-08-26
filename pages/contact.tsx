import React, { useState, useEffect } from 'react';
import ComponentBox from '../components/ComponentBox';
import styles from '../styles/pages/Contact.module.css';
import axios from 'axios';
import { NextPage } from 'next';

interface message {
	name: string;
	email: string;
	message: string;
}

const Contact: NextPage = () => {
	const [submitted, setSubmitted] = useState(false);
	const initialForm = {
		name: '',
		email: '',
		message: '',
	};
	const [response, setResponse] = useState<string>('');
	const [form, setFormState] = useState(initialForm);

	const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		let tempForm: any = { ...form };
		tempForm[e.target.name] = e.target.value;
		setFormState(tempForm);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSubmitted(true);
	};

	const sendForm = async () => {
		try {
			const res = await axios.post(`https://formspree.io/f/xgeqvzqb`, form);
			if (res.data.ok) {
				setResponse('Message Sent');
				setTimeout(() => setResponse(''), 3000);
			}
			setFormState(initialForm);
		} catch (error) {
			setResponse('Something went wrong, Try Again');
			setTimeout(() => setResponse(''), 3000);
		}
	};

	useEffect(() => {
		if (submitted) {
			sendForm();
			setSubmitted(false);
		}
	}, [submitted]);

	return (
		<ComponentBox tag='Contact'>
			<div className={[styles['response-container'], response == '' ? styles['hidden'] : undefined].join(' ')}>
				<div></div>
				<div>{response}</div>
				<button className={styles['close-pop']} onClick={() => setResponse('')}>
					Close
				</button>
			</div>
			<div className={styles['contact-page']}>
				<div className={styles['title-container']}>
					<p className={styles['tag']}>{'<h2>'}</p>
					<h1 className={styles['header']}>Contact</h1>
					<p className={styles['tag']}>{'</h2>'}</p>
				</div>
				<br />
				<ComponentBox tag='form'>
					<div className={styles['form-container']}>
						<form id='fs-frm' className={styles['form-container']} onSubmit={handleSubmit}>
							<label htmlFor='full-name' className={styles['label']}>
								<p className={styles['tag-small']}>{'<h3>'}</p>
								<p className={styles['label-text']}> Full Name:</p>
								<p className={styles['tag-small']}>{'</h3>'}</p>
							</label>
							<input className={styles['input']} type='text' name='name' id='full-name' placeholder='<input type = "text" />' required={true} value={form.name} onChange={handleFormChange} />
							<label htmlFor='email-address' className={styles['label']}>
								<p className={styles['tag-small']}>{'<h3>'}</p>
								<p className={styles['label-text']}> Email:</p>
								<p className={styles['tag-small']}>{'</h3>'}</p>
							</label>
							<input className={styles['input']} type='email' name='email' id='email-address' placeholder='<input type="email" />' required={true} value={form.email} onChange={handleFormChange} />
							<label htmlFor='message' className={styles['label']}>
								<p className={styles['tag-small']}>{'<h3>'}</p>
								<p className={styles['label-text']}> Message:</p>
								<p className={styles['tag-small']}>{'</h3>'}</p>
							</label>
							<textarea className={styles['message']} rows={10} name='message' id='message' placeholder='<textarea />' required={true} value={form.message} onChange={handleFormChange} />
							<input type='hidden' name='_subject' id='email-subject' value='Contact Form Submission' />
							<br />
							<div className={styles['submit-container']}>
								<button type='submit' className={styles['submit-btn']}>
									Submit
								</button>
							</div>
						</form>
					</div>
				</ComponentBox>
				<br />
			</div>
		</ComponentBox>
	);
};

export default Contact;
