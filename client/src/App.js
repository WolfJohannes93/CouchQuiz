import React from "https://cdn.skypack.dev/react@18.2.0";
import TeamLogin from './components/TeamLogin.js';
import HostView from './components/HostView.js';

export default function App() {
  const [mode, setMode] = React.useState(null);

  if (mode === 'team') {
    return React.createElement(TeamLogin, { onBack: () => setMode(null) });
  }

  if (mode === 'host') {
    return React.createElement(HostView, { onBack: () => setMode(null) });
  }

  return React.createElement('div', null,
    React.createElement('h1', null, 'CouchQuiz'),
    React.createElement('button', { onClick: () => setMode('team') }, 'Join as Team'),
    React.createElement('button', { onClick: () => setMode('host'), style: { marginLeft: '8px' } }, 'Host View')
  );
}

