
#def lines(fp):
#    print str(len(fp.readlines()))

import json
import sys
import string

def parsed_json(somefile): # takes a file and parses the output line by line into a list
    json_objs = []
    for line in somefile:
        json_objs.append(json.loads(line))
    return json_objs

#def lines(fp):
#    print "The data contain %s lines." % str(len(fp.readlines()))

def main():
    #sent_file = open(sys.argv[1])
    tweet_file = open(sys.argv[1])
    parsed_output = parsed_json(tweet_file) # Converts the tweet_file to parsed output
    #allWordsSet, total_words = all_words_set(parsed_output)
    #print allWordsSet 
    frequency(parsed_output)

# This function returns a set of all the words that appear in the tweet list and
# the number of total words in all tweets
#def all_words_set(tweet_list): # This list must be parsed.
#    all_words = set()
#    total_words = 0
#    for tweet in tweet_list:
#        if 'text' in tweet:
#            tweet_text = tweet['text']
#            for punct_mark in string.punctuation:
#                tweet_text = tweet_text.replace(punct_mark, " ")
#            line = tweet_text.split(' ')
#            for word in line:
#                all_words.add(word)
#                total_words += 1
#    return all_words, total_words

#this function takes as an argument the set of all words that appear
def frequency(tweet_list):
    #freq_list = [] # this works! loljk
    #tuple_list = []
    word_count_dict = {}
    total_words = 0
    for tweet in tweet_list:
        if 'text' in tweet:
            tweet_text = tweet['text']
            for punct_mark in string.punctuation:
                tweet_text = tweet_text.replace(punct_mark, " ")
            line = tweet_text.split(' ')  ## here and above, removed ['text'] from
                                         ## tweet['text'] 
            for word in line:
                total_words += 1
                if word in word_count_dict:
                    word_count_dict[word] += 1
                else:
                    word_count_dict[word] = 1
    #return word_count_dict

    for word, wordCount in word_count_dict.items():
        print word + " " + str(float(wordCount)/total_words)

if __name__ == '__main__':
    main()
