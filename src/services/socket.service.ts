import { io, Socket } from 'socket.io-client';
import { useAuthStore } from '../store/authStore';
import { toast } from 'react-hot-toast';

class SocketService {
  private socket: Socket | null = null;

  connect() {
    const token = useAuthStore.getState().accessToken;
    if (!token || this.socket) return;

    this.socket = io(import.meta.env.VITE_SOCKET_URL || 'http://localhost:3000', {
      auth: { token: `Bearer ${token}` },
      transports: ['websocket']
    });

    this.socket.on('connect', () => {
      // Connection established
    });

    this.socket.on('disconnect', () => {
      // Disconnected
    });

    this.socket.on('notification.new', (data) => {
      toast.success(data.message, {
        duration: 5000,
        icon: '🔔',
        style: {
          borderRadius: '16px',
          background: '#333',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '12px'
        },
      });
    });

    this.socket.on('lead.assigned', (data) => {
      toast.success(`New Lead Assigned: ${data.firstName} ${data.lastName}`, {
        duration: 6000,
        icon: '👤',
      });
    });
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  getSocket() {
    return this.socket;
  }
}

export const socketService = new SocketService();
