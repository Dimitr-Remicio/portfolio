import { Helmet } from 'react-helmet';

export default function Headers() {
  return (
    <div className="App">
      <Helmet>
      
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Muli&display=swap"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"
        />
        <title>Dimitr Remicio</title>

        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.7/fullpage.css" /><script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.7/vendors/easings.min.js"></script>
      </Helmet>
    </div>
  );
}
