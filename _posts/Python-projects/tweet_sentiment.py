import json
import sys
import string

def parsed_json(somefile): # takes a file and parses the output line by line into a list
    #print(somefile)
    json_objs = []
    for line in somefile:
        json_objs.append(json.loads(line))
    #print "Done parsing"
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
    sentiment_scores =  sentimentScore(parsed_output, scores) # passes our two arguments to achieve desired output
    for line in sentiment_scores:
        print line

#print scores.items() # Print every (term, score) pair in the dictionary

# The following function calculates a sentiment score for each word for each tweet based on the words that appear in our affinity file.
def sentimentScore(tweet_list, scores):
    sentiment = []
    for tweet in tweet_list:
        count = 0
        if 'text' in tweet:
            tweet_text = tweet['text'] 
            for punct_mark in string.punctuation:
                if punct_mark in tweet_text:
                    tweet_text = tweet_text.replace(punct_mark, " ")
            line = tweet_text.split(' ')
            for word in line:
                if word in scores:
                    count += scores[word]
            sentiment.append(count)
    return sentiment	
	
if __name__ == '__main__':
    main()
