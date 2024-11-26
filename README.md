# belly-button-challenge
# Belly Button Biodiversity Dashboard
## Introduction
The Belly Button Biodiversity Dashboard is an interactive web application designed to explore microbiome data dynamically. It allows users to analyze Operational Taxonomic Units (OTUs) and their distributions across different samples, making it an invaluable tool for educational, research, and analytical purposes. By integrating modern web technologies such as JavaScript, Plotly, and D3.js, the dashboard provides intuitive visualizations and detailed metadata, enabling users to interact with complex biological data effortlessly.

### The project leverages three main components:

### JavaScript File (app.js): 
Implements the core logic for dynamic visualizations and user interactions.
### Data File (samples.json): 
Serves as the dataset, containing microbiome composition, sample IDs, and demographic metadata.
### HTML File (index.html): 
Provides the structural layout and links all resources to render the dashboard.
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
## app.js
The JavaScript file (app.js) implements the core logic for creating and managing an interactive OTU Dashboard.
#### Purpose
The file facilitates dynamic visualization of microbiome data by fetching JSON data from an external source and updating the web interface in response to user interactions. It enables users to explore sample-specific metadata, view the top 10 OTUs in a bar chart, and analyze OTU distributions in a bubble chart.
### Key Functionalities
##### 1.	Metadata Panel
Displays detailed information about the selected sample.
Fetches metadata from the dataset and formats it as "KEY: VALUE" pairs in the panel.
##### 2.	Visualizations
###### Bubble Chart:
Shows OTU distributions for the selected sample.
OTU IDs are mapped to the x-axis, sample values to the y-axis, and hover text to OTU labels.
Marker size corresponds to sample values, and colors are based on OTU IDs.
###### Bar Chart:
Displays the top 10 OTUs for the selected sample.
Values are presented in descending order with labels formatted as OTU {id}.
##### 3.Dynamic Dropdown Menu
Populates a dropdown menu with sample IDs (data.names).
Allows users to select a sample, triggering the dashboard to update.
##### 4.	Interactivity
When a new sample is selected via the dropdown, the charts and metadata panel are updated dynamically by calling buildCharts() and buildMetadata() for the selected sample.
##### 5.	Data Integration
Fetches data from a JSON file hosted at https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json.
Extracts relevant fields like otu_ids, otu_labels, and sample_values for chart rendering.
##### 6.	Initialization
On page load, the file:
Fetches the data.
Populates the dropdown menu with sample IDs.
Initializes the dashboard with the first sample's data.
#### Flow of Operations
###### 1.	Initialization (init)
Fetches data.
Populates the dropdown with sample IDs.
Build the initial metadata panel and charts for the default sample.
##### 2.	User Interaction (option Changed)
Triggered when the user selects a new sample.
Updates the metadata panel and charts with data from the selected sample.
##### 3.	Chart and Metadata Building
buildCharts(sample): Constructs the bubble and bar charts.
buildMetadata(sample): Updates the metadata panel.

In essence, this file powers a fully interactive dashboard that allows users to explore microbiome data through engaging visualizations and metadata
## The samples.json 
file contains the microbiome dataset, structured into three key components:
##### 1.	names:
A list of sample IDs, such as "940", "941", "943", etc., corresponding to individual samples.
##### 2.	metadata:
A list of objects containing demographic and experimental details for each sample.
Example fields:
id: Sample ID.
ethnicity: Participant's ethnicity.
gender: Participant's gender.
age: Participant's age.
location: Location of the participant.
bbtype: Belly button type (I/O).
wfreq: Washing frequency (weekly).
##### 3.	samples:
A list of objects detailing the microbiome composition for each sample.
Example fields:
id: Sample ID.
otu_ids: Array of OTU (Operational Taxonomic Unit) IDs detected in the sample.
sample_values: Abundance values corresponding to each OTU ID.
otu_labels: Taxonomic information or descriptive labels for each OTU.
This file serves as the data source for the dashboard, linking sample IDs with their metadata and microbial compositions for visualization in the charts and metadata panel.
## THE INDEX.HTML
The index.html file sets up the structure and layout for the Belly Button Biodiversity Dashboard. Here's what it does:
##### Purpose:
This HTML file creates the foundation for the dashboard's interface, linking the interactive features to the external JavaScript file (app.js) and rendering visualizations using the Plotly and D3 libraries. It is the user-facing component where data is displayed and explored.
#### Key Components
##### 1.	Header Section
Title: Displays the dashboard's name: "Belly Button Biodiversity Dashboard."
Description: Brief instruction: "Use the interactive charts below to explore the dataset."
##### 2.	Dropdown Menu
Located inside a card in the left column.
Populates dynamically with sample IDs using JavaScript.
Triggers data updates when a new sample is selected via the onchange="optionChanged(this.value)" attribute.
##### 3.	Demographic Information Panel
A card labeled "Demographic Info" that dynamically displays metadata for the selected sample.
Uses the <div> with id="sample-metadata" as a container.
##### 4.	Visualizations
Bar Chart: Renders in the <div> with id="bar" to display the top 10 OTUs for the selected sample.
Bubble Chart: Renders in the <div> with id="bubble" to visualize the OTU distribution for the selected sample.
##### 5.	Responsive Layout
Uses Bootstrap for a grid-based, responsive design:
Left Column (3/12 width): Dropdown and metadata panel.
Right Column (9/12 width): Bar chart visualization.
Full-width row for the bubble chart.
This HTML file provides scaffolding for the interactive OTU dashboard, ensuring the dropdown, metadata panel, and visualizations are displayed in a user-friendly and organized way. 
## Conclusion:
The Belly Button Biodiversity Dashboard provides an intuitive platform for exploring microbiome data interactively. By combining a dynamic front-end with robust data handling, it empowers users to delve into biological insights with ease. The project is well-suited for researchers, educators, and enthusiasts looking to visualize complex microbiological dataset.This dashboard's modular design and extensibility offer opportunities for future enhancements, such as additional filtering options, new visualization types, or integration with real-time data sources. Whether used for scientific exploration or education, the application demonstrates the power of modern web technologies in making data accessible and engaging.
