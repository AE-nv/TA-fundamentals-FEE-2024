import type { IServiceContainer } from '@/services/service.container';
import type { App, InjectionKey } from 'vue';
import { inject } from 'vue';

const ServiceContainerProviderSymbol = Symbol(
  'IMCD2T',
) as InjectionKey<IServiceContainer>;

export function registerServices(
  serviceContainer: IServiceContainer,
  app: App,
) {
  app.provide(ServiceContainerProviderSymbol, serviceContainer);
}

export function useServices(): IServiceContainer {
  const serviceContainer = inject(ServiceContainerProviderSymbol);
  if (!serviceContainer) {
    throw 'Services not registered';
  }
  return serviceContainer;
}
