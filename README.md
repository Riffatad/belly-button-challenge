# belly-button-challenge
# Belly Button Biodiversity Dashboard
## Introduction
The Belly Button Biodiversity Dashboard is an interactive web application designed to explore microbiome data dynamically. It allows users to analyze Operational Taxonomic Units (OTUs) and their distributions across different samples, making it an invaluable tool for educational, research, and analytical purposes. By integrating modern web technologies such as JavaScript, Plotly, and D3.js, the dashboard provides intuitive visualizations and detailed metadata, enabling users to interact with complex biological data effortlessly.

### The project leverages three main components:

### JavaScript File (app.js): Implements the core logic for dynamic visualizations and user interactions.
### Data File (samples.json): Serves as the dataset, containing microbiome composition, sample IDs, and demographic metadata.
### HTML File (index.html): Provides the structural layout and links all resources to render the dashboard.
### Key Features
## Interactive Metadata Panel:

Displays demographic and experimental details for the selected sample in a "KEY: VALUE" format.
Dynamically updates based on user-selected samples.
### Visualizations:

#### Bar Chart: 
Showcases the top 10 OTUs in descending order for the selected sample, with OTU IDs as labels.
#### Bubble Chart: 
Visualizes OTU distributions, with bubble size representing abundance and hover text providing taxonomic information.
#### Dynamic Dropdown Menu:
Populates with sample IDs from the dataset.
Triggers data updates when a new sample is selected.
#### Responsive Design:
Uses Bootstrap to ensure compatibility across devices and screen sizes.
Organizes visualizations and metadata into a user-friendly layout.
#### Data Integration:
Fetches data from an external JSON source: Sample Dataset.
Extracts key fields like otu_ids, otu_labels, and sample_values for visualization.
Flow of Operations
#### Initialization:
On page load, the application fetches data, populates the dropdown menu, and displays default sample information.
#### Dynamic Updates:
When a new sample is selected, the application updates the metadata panel and renders updated bar and bubble charts.
#### Data Visualization:
The JavaScript file constructs visualizations dynamically using Plotly, integrating sample-specific OTU data for each selection.
#### Components Breakdown
1. samples.json (Data File)
Contains the microbiome dataset structured into:

names: List of sample IDs.
metadata: Demographic and experimental details for each sample (e.g., ethnicity, gender, age, washing frequency).
samples: Microbial composition per sample, including OTU IDs, abundance values, and descriptive labels.
2. app.js (JavaScript File)
Handles core functionality:

Fetches and processes data from samples.json.
Builds metadata and visualizations dynamically for selected samples.
Links user interactions (dropdown menu) to updates in the dashboard.
3. index.html (HTML File)
Defines the layout of the dashboard:

A dropdown menu for selecting samples.
A metadata panel to display sample details.
Containers for bar and bubble charts to render visualizations.
Conclusion
The Belly Button Biodiversity Dashboard provides an intuitive platform for exploring microbiome data interactively. By combining a dynamic front-end with robust data handling, it empowers users to delve into biological insights with ease. The project is well-suited for researchers, educators, and enthusiasts looking to visualize complex microbiological datasets.

This dashboard's modular design and extensibility offer opportunities for future enhancements, such as additional filtering options, new visualization types, or integration with real-time data sources.
