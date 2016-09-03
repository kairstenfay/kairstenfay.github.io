import json
import sys

states = {
        'AK': 'Alaska',
        'AL': 'Alabama',
        'AR': 'Arkansas',
        'AS': 'American Samoa',
        'AZ': 'Arizona',
        'CA': 'California',
        'CO': 'Colorado',
        'CT': 'Connecticut',
        'DC': 'District of Columbia',
        'DE': 'Delaware',
        'FL': 'Florida',
        'GA': 'Georgia',
        'GU': 'Guam',
        'HI': 'Hawaii',
        'IA': 'Iowa',
        'ID': 'Idaho',
        'IL': 'Illinois',
        'IN': 'Indiana',
        'KS': 'Kansas',
        'KY': 'Kentucky',
        'LA': 'Louisiana',
        'MA': 'Massachusetts',
        'MD': 'Maryland',
        'ME': 'Maine',
        'MI': 'Michigan',
        'MN': 'Minnesota',
        'MO': 'Missouri',
        'MP': 'Northern Mariana Islands',
        'MS': 'Mississippi',
        'MT': 'Montana',
        'NA': 'National',
        'NC': 'North Carolina',
        'ND': 'North Dakota',
        'NE': 'Nebraska',
        'NH': 'New Hampshire',
        'NJ': 'New Jersey',
        'NM': 'New Mexico',
        'NV': 'Nevada',
        'NY': 'New York',
        'OH': 'Ohio',
        'OK': 'Oklahoma',
        'OR': 'Oregon',
        'PA': 'Pennsylvania',
        'PR': 'Puerto Rico',
        'RI': 'Rhode Island',
        'SC': 'South Carolina',
        'SD': 'South Dakota',
        'TN': 'Tennessee',
        'TX': 'Texas',
        'UT': 'Utah',
        'VA': 'Virginia',
        'VI': 'Virgin Islands',
        'VT': 'Vermont',
        'WA': 'Washington',
        'WI': 'Wisconsin',
        'WV': 'West Virginia',
        'WY': 'Wyoming'
}

def parsed_json(somefile): # takes a file and parses the output line by line into a list
    json_objs = []
    for line in somefile:
        json_objs.append(json.loads(line))
    return json_objs

def main():
    sent_file = open(sys.argv[1])
    tweet_file = open(sys.argv[2])
    #lines(sent_file)
    #lines(tweet_file)
    scores = {} # initialize an empty dictionary
    for line in sent_file:
        term, score  = line.split("\t")  # The file is tab-delimited. "\t" means "tab character"
        scores[term] = int(score)  # Convert the score to an integer.
    parsed_output = parsed_json(tweet_file) # Converts the tweet_file to parsed output
    geocodedtweet_list = statesToTweetMapping(parsed_output, states)
    sentiment_output =  sentimentScore(geocodedtweet_list, states, scores)
    happy_state = find_happiest_state(sentiment_output)
    print happy_state

#This function creates a dictionary with every key within the states parameter and the list of all tweets from tweet_list traced back to that state as the value in the key-value pair.
def statesToTweetMapping(tweet_list, states):
    statesMap = {}
    for state in states:
        statesMap[state] = []
    
    for tweet in tweet_list:
        if 'user' in tweet:
            userInfo = tweet["user"]
            if 'location' in userInfo:
                locationInfo = userInfo["location"]
                if locationInfo is not None:
                    location_split = locationInfo.split(',')
                    tweet_state = location_split[len(location_split) - 1]
                    if tweet_state in states:
                        statesMap[tweet_state].extend(tweet['text'].split(' '))
    return statesMap

def sentimentScore(geocodedtweet_list, states, scores):
    sentimentStateDict = {}
    for state in geocodedtweet_list:
        count = 0
        numWords = 0
        for word in geocodedtweet_list[state]:
            if word in scores:
                count += scores[word]
                numWords += 1
        if numWords > 0:
            sentimentStateDict[state] = count/numWords
        else:
            sentimentStateDict[state] = 0
        # this returns the average sentiment per state tweets
    return sentimentStateDict	

def find_happiest_state(sentiment_output):
    max_state = ""
    max_val = -9999
    for state in sentiment_output:
        if sentiment_output[state] > max_val:
            max_val = sentiment_output[state]
            max_state = state
    return max_state

if __name__ == '__main__':
    main()
