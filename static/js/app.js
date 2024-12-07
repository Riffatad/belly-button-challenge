
// Function to build the metadata panel
function buildMetadata(sample) {
  // Fetch the JSON data from the provided URL
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    // Locate the metadata field in the dataset and find the object for the selected sample
    const metadata = data.metadata.find((obj) => obj.id == sample);

    // Select the HTML element with id `#sample-metadata`
    const panel = d3.select("#sample-metadata");

    // Clear any existing content in the metadata panel
    panel.html("");

    // Loop through each key-value pair in the metadata object
    Object.entries(metadata).forEach(([key, value]) => {
      // Append a paragraph for each key-value pair and format it as "KEY: VALUE"
      panel.append("p").text(`${key.toUpperCase()}: ${value}`);
    });
  });
}

// Function to build the bar and bubble charts
function buildCharts(sample) {
  // Fetch the JSON data from the provided URL
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    // Locate the samples field in the dataset and find the object for the selected sample
    const sampleData = data.samples.find((obj) => obj.id == sample);

    // Extract necessary fields: otu_ids, otu_labels, and sample_values
    const { otu_ids, otu_labels, sample_values } = sampleData;

    // Build data for the bubble chart
    const bubbleData = [
      {
        x: otu_ids, // OTU IDs on the x-axis
        y: sample_values, // Sample values on the y-axis
        text: otu_labels, // Hover text for each data point
        mode: "markers", // Display data as markers
        marker: {
          size: sample_values, // Marker size proportional to sample values
          color: otu_ids, // Marker color based on OTU IDs
          colorscale: "Earth", // Color scale for the markers
        },
      },
    ];

    // Layout configuration for the bubble chart
    const bubbleLayout = {
      title: "OTU Distribution", // Title of the chart
      xaxis: { title: "OTU ID" }, // X-axis label
      yaxis: { title: "Sample Values" }, // Y-axis label
    };

    // Render the bubble chart using Plotly
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);

    // Prepare yticks for the bar chart by formatting the top 10 OTU IDs
    const yticks = otu_ids.slice(0, 10).map((id) => `OTU ${id}`).reverse();

    // Build data for the bar chart
    const barData = [
      {
        x: sample_values.slice(0, 10).reverse(), // Top 10 sample values in descending order
        y: yticks, // Corresponding OTU IDs as labels
        text: otu_labels.slice(0, 10).reverse(), // Hover text for each bar
        type: "bar", // Chart type
        orientation: "h", // Horizontal orientation
      },
    ];

    // Layout configuration for the bar chart
    const barLayout = {
      title: "Top 10 OTUs", // Title of the chart
      margin: { t: 30, l: 150 }, // Adjust the margins for better display
    };

    // Render the bar chart using Plotly
    Plotly.newPlot("bar", barData, barLayout);
  });
}

// Function to initialize the dashboard
function init() {
  // Fetch the JSON data from the provided URL
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    // Extract the list of sample names (IDs) from the dataset
    const sampleNames = data.names;

    // Select the dropdown menu element with id `#selDataset`
    const dropdown = d3.select("#selDataset");

    // Populate the dropdown menu with the sample names
    sampleNames.forEach((name) => {
      // Append an option element for each sample name
      dropdown.append("option").text(name).property("value", name);
    });

    // Select the first sample in the list as the default
    const firstSample = sampleNames[0];

    // Build the initial charts and metadata panel for the default sample
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Function to update the dashboard when a new sample is selected
function optionChanged(newSample) {
  // Build charts for the newly selected sample
  buildCharts(newSample);

  // Update the metadata panel for the newly selected sample
  buildMetadata(newSample);
}

// Initialize the dashboard on page load
init();
