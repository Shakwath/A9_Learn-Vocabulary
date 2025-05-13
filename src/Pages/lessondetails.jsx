import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // Replace with your actual auth hook
import Modal from "../Components/Modal"
 
const vocabularies = [
  { word: 'Hello', meaning: 'A greeting', pronunciation: 'heh-loh', part_of_speech: 'interjection', lesson_no: 1, difficulty: 'easy', when_to_say: 'Meeting someone', example: 'Hello, how are you?' },
  { word: 'Intricate', meaning: 'Very complicated or detailed', pronunciation: 'in-tri-kit', part_of_speech: 'adjective', lesson_no: 1, difficulty: 'hard', when_to_say: 'Describing complexity', example: 'The design was intricate and beautiful.' },
  // Add more entries as needed
];

const difficultyColors = {
  easy: 'bg-green-100',
  medium: 'bg-yellow-100',
  hard: 'bg-red-100',
};

const LessonDetails = () => {
  const { lessonId } = useParams();
  const { isAuthenticated } = useAuth(); // Assume this returns auth state
  const navigate = useNavigate();
  const [selectedWord, setSelectedWord] = useState(null);

  useEffect(() => {
    document.title = `Lesson ${lessonId} - Vocabularies`;
  }, [lessonId]);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const filteredVocabularies = vocabularies.filter(
    vocab => vocab.lesson_no === parseInt(lessonId)
  );

  const openModal = (vocab) => {
    setSelectedWord(vocab);
  };

  const closeModal = () => {
    setSelectedWord(null);
  };

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-4xl font-bold mb-10">Lesson {lessonId}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredVocabularies.map((vocab, index) => (
          <div
            key={index}
            className={`p-5 rounded shadow ${difficultyColors[vocab.difficulty] || 'bg-gray-100'}`}
          >
            <h3 className="text-xl font-semibold">{vocab.word}</h3>
            <p><strong>Meaning:</strong> {vocab.meaning}</p>
            <p><strong>Pronunciation:</strong> {vocab.pronunciation}</p>
            <p><strong>Part of Speech:</strong> {vocab.part_of_speech}</p>
            <button
              className="mt-3 text-blue-600 underline"
              onClick={() => openModal(vocab)}
            >
              When to say
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <button
          onClick={() => navigate('/')}
          className="btn btn-secondary"
        >
          Back to Lesson
        </button>
      </div>

      {selectedWord && (
        <Modal onClose={closeModal}>
          <h2 className="text-2xl font-bold mb-4">{selectedWord.word}</h2>
          <p><strong>Meaning:</strong> {selectedWord.meaning}</p>
          <p><strong>When to Say:</strong> {selectedWord.when_to_say}</p>
          <p><strong>Example:</strong> {selectedWord.example}</p>
          <button onClick={closeModal} className="mt-4 btn btn-primary">Close</button>
        </Modal>
      )}
    </div>
  );
};

export default LessonDetails;
