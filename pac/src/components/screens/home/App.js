
import { useNavigate } from 'react-router-dom';
import Layout from '../../layout/Layout';
import Button from '../UI/button/Button';
import styles from './App.module.scss';
import { useAuth } from '../../../hooks/useAuth';

function App() {

  const navigate = useNavigate();

  const { isAuth } = useAuth();
  return (
    <div className="App">
      <Layout bgImage='/images/bg-home-light.jpg' >
        <div className={styles.wrapper}>
            <Button clickHandler={() => navigate(isAuth ? '/new-petting' : '/auth')}>
              {isAuth ? 'Create new petting' : 'Sign in'}
            </Button>
            <h1 className={styles.heading}>
              Back stroking
            </h1>
            {/* Counters */}
        </div>
      </Layout>
    </div>
  );
}

export default App;
