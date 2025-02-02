export const registerMockFetch = (data: any) => {
  console.log('Данные:', data);
  return new Promise((resolve)  => resolve('Успешно'));
};

export const loginMockFetch = (data: any) => {
  console.log('Данные:', data);
  return new Promise((resolve)  => resolve('Успешно'));
};