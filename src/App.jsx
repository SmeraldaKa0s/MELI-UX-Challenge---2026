import { useState } from 'react';
import Home from './views/Home/Home';
import MercadoPlay from './views/MercadoPlay/MercadoPlay';
import OnboardingSalas from './views/OnboardingSalas/OnboardingSalas';
import InvitarAmigo from './views/InvitarAmigo/InvitarAmigo';
import InvitacionEnviada from './views/InvitacionEnviada/InvitacionEnviada';
import './App.css';

export default function App() {
  const [view, setView] = useState('home');
  const [friend, setFriend] = useState(null);

  if (view === 'invitacion-enviada') {
    return (
      <InvitacionEnviada
        friend={friend}
        onInviteAnother={() => setView('invitar-amigo')}
        onHome={() => setView('home')}
        onClose={() => setView('home')}
      />
    );
  }

  if (view === 'invitar-amigo') {
    return (
      <InvitarAmigo
        onBack={() => setView('onboarding-salas')}
        onSubmit={(data) => {
          setFriend(data);
          setView('invitacion-enviada');
        }}
      />
    );
  }

  if (view === 'onboarding-salas') {
    return (
      <OnboardingSalas
        onBack={() => setView('mercado-play')}
        onNavigate={setView}
      />
    );
  }

  if (view === 'mercado-play') {
    return (
      <MercadoPlay
        onBack={() => setView('home')}
        onNavigate={setView}
        friend={friend}
      />
    );
  }

  return <Home onNavigate={setView} />;
}
