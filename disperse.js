// Disperses function @fn invocation randomly over time range [@soonest, @latest] inclusive.
// Cancel @fn by invoking `.cancel()` on the return object.
// Returns `false` if given invalid arguments
function disperse(fn, soonest=5000, latest=soonest+15000) {
  if (soonest < 0 || latest < soonest)
    return false
  const t = setTimeout(fn, soonest + Math.floor(Math.random() * (latest-soonest+1)))
  return {
    cancel: () => clearTimeout(t)
  }
}
