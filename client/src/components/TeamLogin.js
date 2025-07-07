import React from "https://cdn.skypack.dev/react@18.2.0";
import io from "https://cdn.skypack.dev/socket.io-client@4.7.0";

export default function TeamLogin({ onBack }) {
  const [name, setName] = React.useState('');
  const [joined, setJoined] = React.useState(false);

  React.useEffect(() => {
    if (joined) return;
    const socket = io('http://localhost:3001');
    socket.emit('team_join', name);
  }, [joined, name]);

  if (joined) {
    return React.createElement('div', null,
      React.createElement('p', null, 'Waiting for quiz to start...'),
      React.createElement('button', { onClick: onBack }, 'Back')
    );
  }

  return React.createElement('div', null,
    React.createElement('h2', null, 'Team Login'),
    React.createElement('input', {
      type: 'text',
      value: name,
      placeholder: 'Team name',
      onChange: e => setName(e.target.value)
    }),
    React.createElement('button', { onClick: () => setJoined(true) }, 'Join'),
    React.createElement('button', { onClick: onBack, style: { marginLeft: '8px' } }, 'Back')
  );
}

