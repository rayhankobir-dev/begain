export default async function getQuestions() {
    const response = await fetch('/api/question', {
        method: 'GET',
        cache: 'no-cache'
    });
 
    if(!response.ok) {
       throw new Error('Failed to fetch questions!')
    }
    
    return await response.json()
}