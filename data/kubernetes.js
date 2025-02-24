// kubernetes.js
window.Kubernetes = {
  "Kubernetes - Основные команды": {
    "kubectl cluster-info": "Инфо о кластере",
    "kubectl get nodes": "Список узлов",
    "kubectl get pods": "Список подов",
    "kubectl get pods -o wide": "Расширенный список подов",
    "kubectl get services": "Список сервисов",
    "kubectl describe pod <pod_name>": "Детали пода",
    "kubectl logs <pod_name>": "Логи пода",
    "kubectl exec -it <pod_name> -- /bin/bash": "Консоль в поде",
    "kubectl delete pod <pod_name>": "Удалить под",
    "kubectl apply -f <file.yaml>": "Применить YAML",
    "kubectl delete -f <file.yaml>": "Удалить из YAML",
    "kubectl get all": "Все ресурсы",
    "kubectl describe": "Детали объекта",
    "kubectl get <object> --selector <label>": "Фильтр по метке",
    "kubectl scale --replicas=<number> deployment/<deployment_name>":
      "Изменить число реплик",
    "kubectl rollout status deployment/<deployment_name>": "Статус деплоя",
    "kubectl rollout undo deployment/<deployment_name>": "Откат деплоя",
  },
  "Kubernetes - Namespace": {
    "kubectl get ns": "Список пространств",
    "kubectl create ns <namespace_name>": "Создать пространство",
    "kubectl delete ns <namespace_name>": "Удалить пространство",
    "kubectl config set-context --current --namespace=<namespace_name>":
      "Сменить пространство",
    "-n или --namespace": "Указать пространство",
  },
  "Kubernetes - Debugging и Monitoring": {
    "kubectl top nodes": "Метрики узлов",
    "kubectl top pods": "Метрики подов",
    "kubectl port-forward <pod_name> <local_port>:<pod_port>": "Проброс портов",
    "kubectl describe node <node_name>": "Инфо об узле",
    "kubectl get events": "События кластера",
    "kubectl logs -f <pod_name>": "Логи в реальном времени",
    "kubectl get deployment <deployment_name> -o yaml": "YAML деплоймента",
  },
  "Kubernetes - Объекты и понятия": {
    Pod: "Контейнер или группа контейнеров",
    Namespace: "Изоляция ресурсов кластера",
    "Control Plane": "Управляющие компоненты кластера",
    ReplicaSet: "Поддержка числа реплик подов",
    Deployment: "Управление развертыванием",
    DaemonSet: "Запуск подов на узлах",
    NodePort: "Внешний доступ через порты узла",
    LoadBalancer: "Внешний балансировщик нагрузки",
    Ingress: "Маршрутизация внешнего трафика",
    "Kube-Proxy": "Сетевое взаимодействие",
    Labels: "Метки объектов",
    Selectors: "Фильтры по меткам",
    Vault: "Хранилище секретов",
    Service: "Доступ к подам",
    ConfigMap: "Конфигурация для подов",
    Secret: "Защищенные данные",
    StatefulSet: "Управление stateful-приложениями",
    Job: "Разовые задачи",
    CronJob: "Периодические задачи",
  },
  "Kubernetes - Утилиты": {
    kubeadm: "Установка кластера",
    kubectx: "Переключение контекстов",
    stern: "Мультилогирование",
    k9s: "Терминальный UI",
  },
  "Kubernetes - Примеры": {
    "Создание деплоймента с Nginx":
      "Команда: `kubectl create deployment nginx --image=nginx`",
    "Масштабирование деплоймента":
      "Команда: `kubectl scale deployment/nginx --replicas=3`",
    "NodePort сервис":
      "Команда: `kubectl expose deployment/nginx --type=NodePort --port=80`",
    "Логи контейнера": "Команда: `kubectl logs <pod_name> -c <container_name>`",
    "Перезапуск пода": "Команда: `kubectl delete pod <pod_name>`",
    "Применение YAML": "Команда: `kubectl apply -f deployment.yaml`",
    "Проброс портов": "Команда: `kubectl port-forward svc/nginx 8080:80`",
    "Метрики кластера": "Команда: `kubectl top nodes` и `kubectl top pods`",
    "Пример Ingress":
      "Пример манифеста Ingress:\n```\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: example-ingress\nspec:\n  rules:\n  - host: example.com\n    http:\n      paths:\n      - path: /\n        pathType: Prefix\n        backend:\n          service:\n            name: nginx\n            port:\n              number: 80\n```",
    ConfigMap:
      "Команда: `kubectl create configmap my-config --from-file=config.yaml`",
    "Лимиты ресурсов":
      "Команда: `kubectl run limited-container --image=my-image --limits='memory=256Mi,cpu=1'`",
    Мониторинг:
      "1. Запуск Prometheus/Grafana\n2. Сбор метрик\n3. Настройка дашбордов",
  },
  "Kubernetes - Вопросы и Ответы для Собеседований": {
    "Что такое Kubernetes?":
      "Система оркестрации контейнеров для автоматизации развертывания и управления",
    "Что такое pod?":
      "Базовый объект - один или несколько контейнеров с общими ресурсами",
    "ReplicaSet vs Deployment":
      "ReplicaSet следит за подами, Deployment управляет обновлениями",
    "Зачем нужен namespace?": "Для изоляции ресурсов и управления доступом",
    "Как работать с секретами?":
      "Через объект Secret для хранения конфиденциальных данных",
    "Что такое Ingress?":
      "Управление внешним доступом к сервисам через HTTP/HTTPS",
    "Как масштабировать?": "Через команду scale или автоматически через HPA",
    "Когда использовать StatefulSet?":
      "Для приложений с сохранением состояния (БД)",
    "Как обновлять без простоя?": "Через rolling update в Deployment",
    "Роль Kube-Proxy": "Сетевое взаимодействие между подами",
    "Как мониторить?": "Через Prometheus/Grafana и kubectl",
    "Control Plane - что это?": "Компоненты управления кластером",
    "Как управлять доступом?": "Через RBAC роли и политики",
    "DaemonSet - зачем?": "Для запуска pod на каждом узле",
    "Как использовать ConfigMap?": "Создать и монтировать как файл или env",
    "Что такое Operator?":
      "Расширение для автоматизации управления приложениями",
    "Высокая доступность":
      "Мульти-узловой Control Plane, балансировка нагрузки",
  },
};
