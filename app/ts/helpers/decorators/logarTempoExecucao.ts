export function logarTempoExecucao(emSegundos: boolean = false) {

  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args: any[]) {
      let divisor = 1;
      let unidade = 'ms';
      if (emSegundos) {
        divisor = 1000;
        unidade = 'segundos';
      }

      console.log('--------------------------');
      console.log(`os parâmetros passado para o métido ${propertyKey} sao: ${JSON.stringify(args)}`)

      const t1 = performance.now();
      const retorno = metodoOriginal.apply(this, args);

      const t2 = performance.now();

      console.log(`${propertyKey} demorou ${(t2 - t1) / divisor} ${unidade}`);
      return retorno;

    }

    return descriptor;
  }

}