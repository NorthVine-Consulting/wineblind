# Blind Tasting Trainer

An interactive web application for practicing blind wine tasting identification. Select flavor profiles to match wine varietals and explore regional expressions.

Live at: [blindbetter.battlesip.com](http://blindbetter.battlesip.com)

## Features

### Trainer Mode
- **Step-by-step identification**: Choose wine color (white/red), then select detected flavors
- **Smart matching algorithm**: Scores potential grape varieties based on flavor overlap
- **Organized flavor selection**: Flavors grouped into intuitive categories (Fruit, Floral, Spice, Earth/Mineral, Herbal/Vegetal, Nutty/Oak)
- **Match scoring**: Strong/Good/Partial match indicators with percentage scores
- **Regional guidance**: Each result includes key regional expressions with tasting notes

### Reference Mode
- **Comprehensive grape database**: 25+ varietals with complete flavor profiles
- **Filter by type**: View all grapes, only whites, or only reds
- **Search functionality**: Find grapes by name, flavor, or region
- **Regional expressions**: Detailed notes on how each grape expresses itself in different terroirs

## Technology

Pure vanilla JavaScript static site:
- No build process required
- No dependencies
- Single HTML file with embedded styles and scripts
- Modular data files for grapes and flavor categories

## Project Structure

```
.
├── index.html              # Main application (includes all UI, styles, and logic)
├── grapes-data.js          # Grape variety database (25+ varietals)
├── flavor-categories.js    # Flavor taxonomy and organization
├── blindfold-favicon.png   # Favicon
├── battlesip.png          # Logo image
└── CNAME                  # GitHub Pages domain configuration
```

## Data Structure

### Grapes Database
Each grape variety includes:
- Name and alternative names (aka)
- Type (white/red)
- Flavor profile (10+ characteristic flavors)
- Regional expressions with tasting notes

### Flavor Categories
Flavors organized into seven categories:
- **Fruit**: Citrus, stone fruit, berries, tropical, dried fruit
- **Floral**: Rose, violet, jasmine, blossom
- **Spice**: Pepper, ginger, clove, baked spice
- **Earth/Mineral**: Graphite, slate, mushroom, forest floor
- **Nutty/Oak**: Vanilla, toast, chocolate, cedar
- **Herbal/Vegetal**: Herbs, grass, tobacco, eucalyptus
- **Other**: Honey, leather, game, beeswax

## How It Works

### Matching Algorithm
1. User selects wine color and 2-5 flavors
2. Application filters to grapes of matching color
3. Scores each grape by flavor overlap: `score = matched_flavors / selected_flavors`
4. Returns top 5 matches, sorted by score
5. Displays matched and unmatched flavors for learning

### Scoring Thresholds
- **Strong match**: ≥75% flavor overlap
- **Good match**: ≥50% flavor overlap
- **Partial match**: <50% overlap

## Deployment

### GitHub Pages
The site is configured for GitHub Pages deployment:

1. Push to the `main` branch
2. Site automatically deploys to the custom domain specified in `CNAME`

### Local Development
Open `index.html` in any modern browser. No server or build process required.

## Adding New Grapes

Edit [grapes-data.js](grapes-data.js) and add a new entry:

```javascript
{
  name: "Grape Name",
  type: "white", // or "red"
  aka: "Alternative Name",
  flavors: ["flavor1", "flavor2", "flavor3"],
  regions: [
    {
      name: "Region Name",
      note: "Tasting characteristics and style notes."
    }
  ]
}
```

Flavors should use existing terms from [flavor-categories.js](flavor-categories.js) when possible for consistency.

## Credits

Created by [BattleSip](https://battlesip.com/)

© NorthVine Consulting. All Rights Reserved.

## Related Projects

- [My Sip Notes](https://mysipnotes.com/) - Wine tasting note tracking
- [BattleSip](https://battlesip.com/) - Competitive wine tasting game
