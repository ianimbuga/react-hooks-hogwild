import React, { useState } from 'react';

const AddHogForm = ({ setHogs }) => {
    const [formData, setFormData] = useState({
        name: '',
        specialty: '',
        weight: '',
        greased: false,
        medal: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        const { name, specialty, weight } = formData;
        if (!name || !specialty || !weight) {
            setError('All fields are required!');
            return;
        }

        const newHog = {
            ...formData,
            weight: parseFloat(weight),
            'highest medal achieved': formData.medal || 'None',
        };

        setHogs(prevHogs => [...prevHogs, newHog]);
        resetForm();
    };

    const resetForm = () => {
        setFormData({
            name: '',
            specialty: '',
            weight: '',
            greased: false,
            medal: ''
        });
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <h3 style={styles.title}>Add a New Hog</h3>
            {error && <p style={styles.error}>{error}</p>}
            <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                style={styles.input}
            />
            <input
                name="specialty"
                value={formData.specialty}
                onChange={handleChange}
                placeholder="Specialty"
                required
                style={styles.input}
            />
            <input
                name="weight"
                type="number"
                value={formData.weight}
                onChange={handleChange}
                placeholder="Weight"
                required
                style={styles.input}
            />
            <label style={styles.label}>
                <input
                    name="greased"
                    type="checkbox"
                    checked={formData.greased}
                    onChange={handleChange}
                    style={styles.checkbox}
                />
                Greased
            </label>
            <input
                name="medal"
                value={formData.medal}
                onChange={handleChange}
                placeholder="Highest Medal Achieved"
                style={styles.input}
            />
            <button type="submit" style={styles.button}>
                Add Hog
            </button>
        </form>
    );
};

// New styles for the component
const styles = {
    form: {
        margin: '20px 0',
        display: 'flex',
        flexDirection: 'column',
        padding: '30px',
        borderRadius: '12px',
        backgroundColor: '#f0f4f8',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    },
    title: {
        marginBottom: '20px',
        color: '#333',
        fontFamily: 'sans-serif',
        fontWeight: '600',
    },
    error: {
        color: '#d9534f',
        marginBottom: '10px',
        fontWeight: '500',
    },
    input: {
        margin: '10px 0',
        padding: '12px',
        width: '100%',
        border: '2px solid #007bff',
        borderRadius: '8px',
        fontSize: '16px',
        transition: 'border-color 0.3s',
        outline: 'none',
    },
    inputFocus: {
        borderColor: '#0056b3',
    },
    label: {
        margin: '10px 0',
        display: 'flex',
        alignItems: 'center',
        fontSize: '14px',
        color: '#555',
    },
    checkbox: {
        marginRight: '8px',
    },
    button: {
        marginTop: '15px',
        padding: '12px',
        width: '100%',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s, transform 0.2s',
    },
};

// Adding hover effect for the button
styles.buttonHover = {
    backgroundColor: '#0056b3',
};

export default AddHogForm;
