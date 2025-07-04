// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
//DONE
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
//DONE
// 3. Add a root layout that adds the <MainNavigation> component above all page components
//DONE
// 4. Add properly working links to the MainNavigation
//DONE
// 5. Ensure that the links in MainNavigation receive an "active" class when active
//DONE
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
//DONE
// 7. Output the ID of the selected event on the EventDetailPage
//DONE
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
//DONE

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import EventsPage from './pages/Events';
import EventDetailPage from './pages/EventDetail';
import EditEventPage from './pages/EditEvent';
import NewEventPage from './pages/NewEvent';
import EventLayout from './pages/EventRoot';

const router = createBrowserRouter([
   {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
         { index: true, element: <HomePage /> },
         {
            path: 'events',
            element: <EventLayout />,
            children: [
               { index: true, element: <EventsPage /> },
               { path: ':eventId', element: <EventDetailPage /> },
               { path: 'new', element: <NewEventPage /> },
               { path: ':eventId/edit', element: <EditEventPage /> },
            ],
         },
      ],
   },
]);

function App() {
   return <RouterProvider router={router} />;
}

export default App;
