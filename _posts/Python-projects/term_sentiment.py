
def lines(fp):
    print str(len(fp.readlines()))

import json
import sys

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
    tweet_sentiment_list, unknown_words =  sentimentTuples(parsed_output, scores) # passes our two arguments to achieve desired output
    assignWordScore(tweet_sentiment_list, unknown_words)

#Returns a 2-tuple. First item is a list of tuples, where the first
#item in each tuple is the text of a tweet, and the second item is its score
#The second item is a set of words that we want to find the sentiment of. 
def sentimentTuples(tweet_list, scores):
    sentiment = []
    unknown_words = set()
    for tweet in tweet_list:
        count = 0
        if 'text' in tweet: 
            line = tweet["text"].split(' ')
            for word in line:
                if word in scores:
                    count += scores[word]
                else:
                    unknown_words.add(word) 
            tweet_score = tweet["text"], count
            sentiment.append(tweet_score)
    return sentiment, unknown_words

#For every word in unknown words, average the sentiment of all the tweets that contain that word.
def assignWordScore(tweet_sentiment_list, unknown_words):
    unknown_list = []
    for i in unknown_words:
        totalSent = 0
        numTweets = 0
        for tuplee in tweet_sentiment_list:
            if i in tuplee[0]:
                totalSent += tuplee[1]
                numTweets += 1
        unknown_score = float(totalSent)/(numTweets)
        unknown_tuple = i, unknown_score
        unknown_list.append(unknown_tuple)
        print unknown_tuple[0], unknown_tuple[1]
    return unknown_list    

if __name__ == '__main__':
    main()
