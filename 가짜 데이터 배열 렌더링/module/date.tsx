export const makeArray = (length: number) => new Array(length).fill(null)

export const randomId = () => Math.random().toString(36).substring(2, 8)
export const randomName = () => "John Doe"
export const randomJobTitle = () => "Frontend Developer"
export const randomSentence = () => "This is a random sentence."
export const randomAvatar = () => "https://via.placeholder.com/100"
