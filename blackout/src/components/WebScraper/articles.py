import requests

query = 'load shedding news'
# Set the number of results to retrieve (max 10)
num_results = 5

# Base URL for Google Search API
base_url = 'https://www.googleapis.com/customsearch/v1'

# Make a request to the API
params = {
    'key': 'AIzaSyDvbRDZNFKQ8ZKUnOG2bSxEbUpAb9CFIVg',
    'q': query,
    'num': num_results,  # Use 'num' instead of 'num_results'
    'cx': 'c448b059cebb74c23',  # Replace with your custom search engine ID
    'dateRestrict': 'd1',
}
response = requests.get(base_url, params=params)

# Parse the JSON response
data = response.json()

# Extract URLs and titles from the search results
if 'items' in data:
    for result in data['items']:
        print('Title:', result['title'])
        print('URL:', result['link'])
        print('---')
else:
    print('No results found.')
