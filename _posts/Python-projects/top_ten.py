import json
import sys
import operator

def parsed_json(somefile): # takes a file and parses the output line by line into a list
    json_objs = []
    for line in somefile:
        json_objs.append(json.loads(line))
    return json_objs

def main():
    #sent_file = open(sys.argv[1])
    tweet_file = open(sys.argv[1])
    parsed_output = parsed_json(tweet_file) # Converts the tweet_file to parsed output
    my_hashtag_map = hashtag_tracker(parsed_output)
    top_ten_hash = top_ten(my_hashtag_map)
    for i in top_ten_hash:
        print i, top_ten_hash[i]

#This function creates a dictionary of all unique hashtags with their frequency.
def hashtag_tracker(tweet_list):
    hashtag_map = {}
    for tweet in tweet_list:
        if 'entities' in tweet:
            entities = tweet["entities"]
            if "hashtags" in entities:
                hashtag_list = entities['hashtags']   
                for item in hashtag_list: # item is a dict
                    if 'text' in item: # if item has key 'text'
                        hashtag = item['text'] 
                        if hashtag not in hashtag_map:
                            hashtag_map[hashtag] = 1
                        else:
                            hashtag_map[hashtag] += 1
    return hashtag_map

# This function returns a dictionary of the top ten hashtags determined by the previous function.
def top_ten(hashtag_map):
    newDict = dict(sorted(hashtag_map.iteritems(), key=operator.itemgetter(1), reverse=True)[:10])
    return newDict

if __name__ == '__main__':
    main()
