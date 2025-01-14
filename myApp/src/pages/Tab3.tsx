import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login / Register</IonTitle>
          </IonToolbar>
        </IonHeader>
      

      <IonButton routerLink='/login'>Login</IonButton>
      <IonButton routerLink='/register' color="secondary">Register</IonButton>


      </IonContent>
    </IonPage>
  );
};

export default Tab3;
