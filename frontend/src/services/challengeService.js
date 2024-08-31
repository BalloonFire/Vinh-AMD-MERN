import axios from 'axios'

const API_URL = 'http://localhost:3030/challenges'

export const getChallenges = async () => {
  const response = await axios.get(API_URL)
  return response.data
}

export const getChallenge = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`)
  return response.data
}

export const createChallenge = async (challengeData) => {
  const response = await axios.post(API_URL, challengeData)
  return response.data
}

export const updateChallenge = async (id, challengeData) => {
  const response = await axios.patch(`${API_URL}/${id}`, challengeData)
  return response.data
}

export const deleteChallenge = async (id) => {
  await axios.delete(`${API_URL}/${id}`)
}
