import styles from './App.module.css';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className={styles.outer}>
      <Header />
    </div>
  );
}

export default App;

/*
- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Desaturated Dark Cyan: hsl(180, 29%, 50%)

### Neutral

- Light Grayish Cyan (Background): hsl(180, 52%, 96%)
- Light Grayish Cyan (Filter Tablets): hsl(180, 31%, 95%)
- Dark Grayish Cyan: hsl(180, 8%, 52%)
- Very Dark Grayish Cyan: hsl(180, 14%, 20%)

## Typography

### Body Copy

- Font size: 15px

### Headings

- Family: [League Spartan](https://fonts.google.com/specimen/League+Spartan)
- Weights: 500, 700

*/ 