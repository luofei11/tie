// Copyright 2017 The TIE Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Question data for i18n.
 */

globalData.questions['i18n'] = {  // eslint-disable-line dot-notation
  title: 'Internationalization (i18n)',
  starterCode: {
    python:
`def abbreviate(word):
    return ""

def are_all_unique(words):
    return True
`
  },
  auxiliaryCode: {
    python:
`class AuxiliaryCode(object):
    @classmethod
    def forgetLastLetter(cls, word):
        result = "%s%d" % (word[0], len(word) - 2) if len(word) > 2 else word
        return result

    @classmethod
    def useFirstAndLastLetterAndLengthToAbbreviate(cls, word):
        if word:
            return "%s%d%s" % (word[0], len(word) - 2, word[-1])
        return ""

    @classmethod
    def createListOfUniqueStrings(cls, atom, size):
        result = []
        for i in range(size):
            result.append(atom * (i + 1))
        return result
`
  },
  tasks: [{
    instructions: [
      'In this question, you will implement two functions.',
      [
        'First, implement the abbreviate function. It takes a string as input ',
        'and returns an abbreviation of the string of the form ',
        '<first character><length of the middle of the string><last character>. ',
        'For example, "internationalization" should be abbreviated as "i18n".'
      ].join('')
    ],
    prerequisiteSkills: ['Arrays', 'Strings', 'String Manipulation'],
    acquiredSkills: ['String Manipulation'],
    inputFunctionName: null,
    outputFunctionName: null,
    mainFunctionName: 'abbreviate',
    correctnessTests: [{
      input: 'internationalization',
      allowedOutputs: ['i18n']
    }, {
      input: 'monkey',
      allowedOutputs: ['m4y']
    }, {
      input: 'friendship',
      allowedOutputs: ['f8p']
    }, {
      input: 'bat',
      allowedOutputs: ['bat']
    }, {
      input: 'at',
      allowedOutputs: ['at']
    }, {
      input: 't',
      allowedOutputs: ['t']
    }],
    buggyOutputTests: [{
      buggyFunctionName: 'AuxiliaryCode.forgetLastLetter',
      messages: [
        "Try running your code on 'word' in your head. What's the result?.",
        [
          "You seem to be dropping the last character of the string when ",
          "you're abbreviating."
        ].join(''),
        [
          "Make sure to add the last character of the string back on when ",
          "you've abbreviated."
        ].join('')
      ]
    },
    {
      buggyFunctionName: 'AuxiliaryCode.useFirstAndLastLetterAndLengthToAbbreviate',
      messages: [
        [
          "Think about how your code handles short inputs. ",
          "'c1t' is not an abbreviation for 'cat'."
        ].join(''),
        [
          "It looks like you're using the string's length minus two in the ",
          "middle, which is usually fine, but can you think of any issues ",
          "that might present?"
        ].join(''),
        [
          "For short strings, you're actually ending up with a negative ",
          "number in the middle. You don't need to abbreviate strings with ",
          "length <= 3."
        ].join('')
      ]
    }],
    performanceTests: []
  },
  {
    instructions: [
      [
        "Implement are_all_unique, a function that takes a list of strings as ",
        "input and returns a boolean indicating whether all the strings in ",
        "the input are unique when abbreviated by the above abbreviate ",
        "function."
      ].join('')
    ],
    prerequisiteSkills: ['Arrays', 'Strings', 'String Manipulation'],
    acquiredSkills: ['String Manipulation', 'Sets', 'Arrays', 'Maps'],
    inputFunctionName: null,
    outputFunctionName: null,
    mainFunctionName: 'are_all_unique',
    correctnessTests: [{
      input: ['cat', 'dog', 'cart'],
      allowedOutputs: [true]
    }, {
      input: ['clot', 'dog', 'cart'],
      allowedOutputs: [false]
    }],
    buggyOutputTests: [],
    performanceTests: [{
      inputDataAtom: 'o',
      transformationFunctionName: 'AuxiliaryCode.createListOfUniqueStrings',
      expectedPerformance: 'linear',
      evaluationFunctionName: 'are_all_unique'
    }]
  }],
  styleTests: [{
    evaluationFunctionName: 'allowOnlyOneFunction',
    expectedOutput: true,
    message: [
      "You should only be writing code in an abbreviate function. While ",
      "decomposition is generally a good idea, you shouldn't need more than ",
      "just this function for this question."
    ].join('')
  }]
};
