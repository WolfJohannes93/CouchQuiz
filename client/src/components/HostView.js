import React from "https://cdn.skypack.dev/react@18.2.0";
import io from "https://cdn.skypack.dev/socket.io-client@4.7.0";

export default function HostView({ onBack }) {
  const [teams, setTeams] = React.useState([]);

  React.useEffect(() => {
    const socket = io('http://localhost:3001');
    socket.on('teams_update', setTeams);
    return () => socket.disconnect();
  }, []);

  return React.createElement('div', null,
    React.createElement('h2', null, 'Host View'),
    React.createElement('ul', null,
      teams.map((team, idx) => React.createElement('li', { key: idx }, team))
    ),
    React.createElement('button', { onClick: onBack }, 'Back')
  );
}

