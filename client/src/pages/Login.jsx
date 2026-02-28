<<<<<<< HEAD
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const Login = () => {
  const { login } = useAuth();
  // Form field state
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // UI states
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  // Step 8: Create Input Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear field-specific error
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    // Clear global API error
    if (apiError) {
      setApiError('');
    }
  };

  // Step 9: Create Validation Function
  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Step 10: Submit Handler with JWT Storage
  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email.trim().toLowerCase(),
          password: formData.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        // Use the login function from context
        login(data.user, data.token);
      } else {
        setApiError(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setApiError('Unable to connect to server. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Step 11 & 12: UI and Styles
  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Login to Your Account</h2>
        
        {apiError && <div style={styles.errorBanner}>{apiError}</div>}

        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{...styles.input, borderColor: errors.email ? '#ff4d4f' : '#d9d9d9'}}
            placeholder="email@example.com"
          />
          {errors.email && <span style={styles.errorText}>{errors.email}</span>}
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{...styles.input, borderColor: errors.password ? '#ff4d4f' : '#d9d9d9'}}
            placeholder="••••••••"
          />
          {errors.password && <span style={styles.errorText}>{errors.password}</span>}
        </div>

        <button 
          type="submit" 
          disabled={isLoading} 
          style={{...styles.button, backgroundColor: isLoading ? '#a5a5a5' : '#007bff'}}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>

        <p style={styles.footerText}>
          Don't have an account? <Link to="/register" style={styles.link}>Register here</Link>
        </p>
      </form>
=======
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h1 style={titleStyle}>Login</h1>
        <p style={subtitleStyle}>Sign in to your account</p>
        
        {/* Placeholder for login form */}
        <div style={placeholderStyle}>
          <p>Login form will be implemented in a future lesson</p>
          <p>This will include:</p>
          <ul style={listStyle}>
            <li>Email input field</li>
            <li>Password input field</li>
            <li>Login button</li>
            <li>Form validation</li>
          </ul>
        </div>

        <p style={linkTextStyle}>
          Don't have an account?{' '}
          <Link to="/register" style={linkStyle}>
            Register here
          </Link>
        </p>
      </div>
>>>>>>> d39ade6f41729e70bccd40657a1721fb46e33cd7
    </div>
  );
};

<<<<<<< HEAD
// Simple CSS-in-JS styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
    padding: '20px'
  },
  form: {
    width: '100%',
    maxWidth: '400px',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    backgroundColor: '#fff'
  },
  title: {
    textAlign: 'center',
    marginBottom: '24px',
    color: '#333'
  },
  inputGroup: {
    marginBottom: '16px',
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    marginBottom: '8px',
    fontWeight: '500',
    color: '#555'
  },
  input: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #d9d9d9',
    fontSize: '16px'
  },
  button: {
    width: '100%',
    padding: '12px',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px'
  },
  errorText: {
    color: '#ff4d4f',
    fontSize: '12px',
    marginTop: '4px'
  },
  errorBanner: {
    padding: '10px',
    backgroundColor: '#fff2f0',
    border: '1px solid #ffccc7',
    color: '#ff4d4f',
    borderRadius: '4px',
    marginBottom: '16px',
    textAlign: 'center'
  },
  footerText: {
    textAlign: 'center',
    marginTop: '20px',
    color: '#666'
  },
  link: {
    color: '#007bff',
    textDecoration: 'none'
  }
=======
const containerStyle = {
  minHeight: '80vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
};

const formContainerStyle = {
  maxWidth: '400px',
  width: '100%',
  padding: '2rem',
  backgroundColor: 'white',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const titleStyle = {
  textAlign: 'center',
  marginBottom: '0.5rem',
  color: '#333',
};

const subtitleStyle = {
  textAlign: 'center',
  color: '#666',
  marginBottom: '2rem',
};

const placeholderStyle = {
  backgroundColor: '#f8f9fa',
  padding: '1.5rem',
  borderRadius: '5px',
  marginBottom: '1rem',
};

const listStyle = {
  paddingLeft: '1.5rem',
  marginTop: '1rem',
};

const linkTextStyle = {
  textAlign: 'center',
  marginTop: '1rem',
};

const linkStyle = {
  color: '#007bff',
  textDecoration: 'none',
  fontWeight: 'bold',
>>>>>>> d39ade6f41729e70bccd40657a1721fb46e33cd7
};

export default Login;