import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

export function usePlaceOrder() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: {
      service: string;
      packageName: string;
      quantity: string;
      profileUrl: string;
      price: string;
      customerWhatsApp?: string;
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      const orderId = await actor.placeOrder(
        params.service,
        params.packageName,
        params.quantity,
        params.profileUrl,
        params.price,
        params.customerWhatsApp ?? null
      );
      return orderId;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    }
  });
}

export function useListOrders() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['orders'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listOrders();
    },
    enabled: !!actor && !isFetching,
  });
}
