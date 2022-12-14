export const observerA = {
  next: (v:any) => console.log('[A] next', v),
  error: (err:any) => console.log('[A] error', err.message),
  complete: () => console.log('[A] done'),
}

export const observerB = {
  next: (v:any) => console.log('[B] next:', v + " vs " + v),
  error: (err:any) => console.log('[B] error', err),
  complete: () => console.log('[B] done'),
}

console.clear()
