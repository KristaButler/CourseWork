import MainNavigation from '../components/MainNavigation';

export default function ErrorPage() {
   return (
      <>
         <MainNavigation />
         <main>
            <h1>Oops...</h1>
            <p>We couldn't find that page anywhere.</p>
         </main>
      </>
   );
}
