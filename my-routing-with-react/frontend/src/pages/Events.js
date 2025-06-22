import { Link } from 'react-router-dom';

const EVENTS = [
   {
      id: 'e1',
      title: 'Event 1',
      description: 'The description of the first event.',
      date: '01/01/2026',
      image: '',
   },
   {
      id: 'e2',
      title: 'Event 2',
      description: 'The description of the second event.',
      date: '02/01/2026',
      image: '',
   },
   {
      id: 'e3',
      title: 'Event 3',
      description: 'The description of the third event.',
      date: '03/01/2026',
      image: '',
   },
   {
      id: 'e4',
      title: 'Event 4',
      description: 'The description of the fourth event.',
      date: '04/01/2026',
      image: '',
   },
   {
      id: 'e5',
      title: 'Event 5',
      description: 'The description of the fifth event.',
      date: '05/01/2026',
      image: '',
   },
];

export default function EventsPage() {
   return (
      <>
         <h1>Events</h1>
         <ul>
            {EVENTS.map((event) => (
               <li key={event.id}>
                  <Link to={event.id}>{event.title}</Link>
               </li>
            ))}
         </ul>
      </>
   );
}
