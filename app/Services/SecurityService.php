<?php

class SecurityService
{

    private $sso;

    public function __construct()
    {
        WorkOS\WorkOS::setApiKey(env("WORKOS_API_KEY"));
        $this->sso = new WorkOS\SSO();
    }

    public function connection()
    {
        [$before, $after, $connections] = $this->sso->listConnections(
            limit: 100,
            order: "desc"
        );

        while ($after) {
            [$before, $after, $currentPage] = $this->sso->listConnections(
                limit: 100,
                after: $after,
                order: "desc"
            );

            $connections = array_merge($connections, $currentPage);
        }
    }
}
