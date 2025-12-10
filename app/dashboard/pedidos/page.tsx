
"use client"

import DashboardLayout from "@/components/dashboard-layout"
import PedidosTable from "@/components/pedidos-table"
import PedidosFDVTable from "@/components/pedidos-fdv-table"
import PedidosSyncMonitor from "@/components/pedidos-sync-monitor"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PedidosPage() {
  return (
    <DashboardLayout hideFloatingMenu={true}>
      <div className="space-y-4">
        <Tabs defaultValue="fdv" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="fdv">Pedidos FDV</TabsTrigger>
            <TabsTrigger value="sankhya">Pedidos Sankhya</TabsTrigger>
            <TabsTrigger value="sincronizador">Sincronizador</TabsTrigger>
          </TabsList>
          
          <TabsContent value="fdv">
            <PedidosFDVTable />
          </TabsContent>
          
          <TabsContent value="sankhya">
            <PedidosTable />
          </TabsContent>
          
          <TabsContent value="sincronizador">
            <PedidosSyncMonitor />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
