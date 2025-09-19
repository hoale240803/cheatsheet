# Grid

order is important! This is how grid-area will interpret those values.

grid-row-start
grid-column-start
grid-row-end
grid-column-end

# Em

The first relative unit of measurement in CSS is the em, coded as em. It is relative to the font-size of the element it is used on.

```
body { font-size: 16px; }
h1 { font-size: 2em; /* 32px */ }
p { font-size: 1.5em; /* 24px */ }
```

```
html {
  font-size: 12px;
}

.splash-section {
  font-size: 16px;
}

.splash-section h1 {
  font-size: 1.5em; /* 24px */
}
```

(the .splash-section h1‘s starting font-size which was inherited from the .splash -section) \* 1.5em (multiple of the .splash-section h1‘s starting font-size) = 24px

# rem

The second relative unit of measurement in CSS is the rem, coded as rem.

```
html { font-size: 16px; }
body { font-size: 1.5rem; /* 24px */ }
h1 { font-size: 2rem; /* 32px */ }
```

# Viewport Meta Tag

# Dots Per Inch (DPI)

```
@media only screen and (min-resolution: 300dpi) {
    /* CSS for high resolution screens */
}

```
