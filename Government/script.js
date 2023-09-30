function showContent(contentId) {
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        container.classList.remove('active-container');
    });
    document.getElementById(contentId).classList.add('active-container');
}

// this is for backend
function addDataToTable(index, name, age, email) {
    const table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);

    const cellIndex = newRow.insertCell(0);
    cellIndex.innerHTML = index;

    const cellName = newRow.insertCell(1);
    cellName.innerHTML = name;

    const cellAge = newRow.insertCell(2);
    cellAge.innerHTML = age;

    const cellEmail = newRow.insertCell(3);
    cellEmail.innerHTML = email;


}

// Function to reset the form and hide it
function resetForm() {
    document.getElementById("dataForm").reset();
    document.getElementById("dataForm").style.display = "none";
}

// Event listener for "Add Data" button
document.getElementById("addDataButton").addEventListener("click", function () {
    document.getElementById("dataForm").style.display = "block";
});

// Event listener for form submission
document.getElementById("dataForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;


    const table = document.getElementById("dataTable");
    const index = table.rows.length; // Index is the number of rows in the table

    addDataToTable(index, name, age, email);
    resetForm();
});

                // Sample data for student dropout rate by father's income (in lakhs per year)
                const incomeCategories = ['0-2', '2-5', '5-10'];
                const dropoutRates_i = [15, 8, 5]; // Dropout rates for each income category

                // Create a bar chart
                var ctx = document.getElementById('dropoutChart_Income_wise').getContext('2d');
                var dropoutChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: incomeCategories.map(category => `${category} Lakhs`),
                        datasets: [{
                            label: 'Dropout Rate (%)',
                            data: dropoutRates_i,
                            backgroundColor: 'rgba(75, 192, 192, 0.6)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        scales: {
                            y: {
                                beginAtZero: true,
                                title: {
                                    display: true,
                                    text: 'Dropout Rate (%)'
                                }
                            },
                            x: {
                                title: {
                                    display: true,
                                    text: "Father's Income (Lakhs per Year)"
                                }
                            }


                        }
                    }
                });

                // Sample city-wise dropout rate data for all 38 cities in Gujarat
                const SchoolData = [
                    { city: 'Sheth C.N. English Medium School.', dropoutRate: 10 },
                    { city: 'Maharaja Agrasen Vidyalaya.', dropoutRate: 8 },
                    { city: 'Eklavya School.', dropoutRate: 12 },
                    { city: 'Udgam School For Children.', dropoutRate: 15 },
                    // Add data for all 38 cities here
                ];

                // Extract labels (city names) and data values (dropout rates) from the data
                const schoolLabels = SchoolData.map(item => item.city);
                const dropoutRates_s = SchoolData.map(item => item.dropoutRate);

                // Create a bar chart
                var ctx = document.getElementById('dropoutChart_School_wise').getContext('2d');
                var dropoutChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: schoolLabels,
                        datasets: [{
                            label: 'Dropout Rate (%)',
                            data: dropoutRates_s,
                            backgroundColor: 'rgba(75, 192, 192, 0.6)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        indexAxis: 'y',
                        responsive: true,
                        scales: {
                            y: {
                                beginAtZero: true,
                                title: {
                                    display: true,
                                    text: 'Dropout Rate (%)'
                                }
                            },
                            x: {
                                title: {
                                    display: true,
                                    text: 'School'
                                }
                            }
                        },
                        plugins: {
                            legend: {
                                display: false, // Hide the legend if needed
                            }
                        },
                        datasets: {
                            bar: {
                                barPercentage: 1, // Adjust this value to control the bar width (50% of available space)
                            }
                        }
                    }
                });

                // Sample city-wise dropout rate data for all 38 cities in Gujarat
                const cityData = [
                    { city: 'Ahmedabad', dropoutRate: 10 },
                    { city: 'Surat', dropoutRate: 8 },
                    { city: 'Vadodara', dropoutRate: 12 },
                    { city: 'Rajkot', dropoutRate: 15 },
                    // Add data for all 38 cities here
                ];

                // Extract labels (city names) and data values (dropout rates) from the data
                const cityLabels = cityData.map(item => item.city);
                const dropoutRates_a = cityData.map(item => item.dropoutRate);

                // Create a bar chart
                var ctx = document.getElementById('dropoutChart_Area_wise').getContext('2d');
                var dropoutChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: cityLabels,
                        datasets: [{
                            label: 'Dropout Rate (%)',
                            data: dropoutRates_a,
                            backgroundColor: 'rgba(75, 192, 192, 0.6)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        indexAxis: 'y',
                        responsive: true,
                        scales: {
                            y: {
                                beginAtZero: true,
                                title: {
                                    display: true,
                                    text: 'Dropout Rate (%)'
                                }
                            },
                            x: {
                                title: {
                                    display: true,
                                    text: 'City'
                                }
                            }
                        },
                        plugins: {
                            legend: {
                                display: false, // Hide the legend if needed
                            }
                        },
                        datasets: {
                            bar: {
                                barPercentage: 1, // Adjust this value to control the bar width (50% of available space)
                            }
                        }
                    }
                });


                // Data
                const casteCategories = ['General', 'Scheduled Castes (SC)', 'Scheduled Tribes (ST)', 'Other Backward Class (OBC)'];
                const dropoutRates = [10, 20, 5, 15]; // Dropout rates for each caste category

                // Create a bar chart
                var ctx = document.getElementById('dropoutChart_Cast_wise').getContext('2d');
                var dropoutChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: casteCategories,
                        datasets: [{
                            label: 'Dropout Rate (%)',
                            data: dropoutRates,
                            backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(255, 205, 86, 0.6)', 'rgba(54, 162, 235, 0.6)'],
                            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 205, 86, 1)', 'rgba(54, 162, 235, 1)'],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        indexAxis: 'y',
                        responsive: true,
                        scales: {
                            y: {
                                beginAtZero: true,
                                title: {
                                    display: true,
                                    text: 'Dropout Rate (%)'
                                }
                            },
                            x: {
                                title: {
                                    display: true,
                                    text: 'Caste Category'
                                }
                            }
                        }
                    }
                });


                               // Data
                const totalStudents = 1000;
                const totalDropouts = 50;

                const maleDropouts = 18;
                const femaleDropouts = 32;

                // Create a pie chart
                var ctx = document.getElementById('dropoutChart_Gender_wise').getContext('2d');
                var dropoutChart = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: ['Male', 'Female'],
                        datasets: [{
                            data: [maleDropouts, femaleDropouts],
                            backgroundColor: ['#0074A3', '#F3BA00'],
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                labels: {
                                    // This more specific font property overrides the global property
                                    font: {
                                        size: 18
                                    }
                                }
                            }
                        }
                    }
                });


                // Data
                const dropoutData = [
                    { ageGroup: '0-5', dropoutCount: 12 },
                    { ageGroup: '6-10', dropoutCount: 15 },
                    { ageGroup: '11-15', dropoutCount: 8 },
                    { ageGroup: '16-20', dropoutCount: 15 },
                ];

                // Extract labels and data values from the data
                const labels = dropoutData.map(item => item.ageGroup);
                const dataValues = dropoutData.map(item => item.dropoutCount);

                // Create a chart
                var ctx = document.getElementById('dropoutChart_Age_wise').getContext('2d');
                var dropoutChart = new Chart(ctx, {
                    type: 'bar', // Bar chart type
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Student Dropout Count',
                            data: dataValues,
                            backgroundColor: 'rgba(75, 192, 192, 0.6)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 3
                        }]
                    },
                    options: {
                        responsive: true,
                        scales: {
                            x: {
                                beginAtZero: true
                            },
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });


                // Data for the pie chart
                var data = {
                    labels: ['School Students', 'Dropout Students'],
                    datasets: [{
                        data: [950, 50],
                        backgroundColor: ['#0074A3', '#F3BA00'],
                    }]
                };

                // Create the pie chart
                var ctx = document.getElementById('dropoutChart').getContext('2d');
                var dropoutChart = new Chart(ctx, {
                    type: 'pie',
                    data: data,
                    options: {
                        responsive: true,
                        maintainAspectRatio: true,
                        plugins: {
                            legend: {
                                labels: {
                                    // This more specific font property overrides the global property
                                    font: {
                                        size: 18
                                    }
                                }
                            }
                        }
                    }
                });


                